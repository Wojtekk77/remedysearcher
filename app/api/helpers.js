import PolishWordArray from '@models/polishWordArray';
import { getSearchProps, getWordsFamiliesWithSentences } from './remedies/helpers';

export const getRegexQuery = async ({ text, field, queryJoiner = '$and' }) => {

    const [searchWordsArray, additionalWordsObj, additionalWordsArr] = getSearchProps({ mind: text });

    let startTimewordsFamilies = new Date(); 
    let rawWordsFamilies = await getWordsVariations(searchWordsArray, additionalWordsArr);
    console.log(rawWordsFamilies, 'rawWordsFamilies')
    // console.log(rawWordsFamilies, 'rawWordsFamilies');
    let endTimeWordsFamilies = new Date(); 

    const query = { [queryJoiner]: [] };
    const allWords = [];
    const wordsFamilies = [];
    const additionalFullObj = {};
    const primaryFullObj = {};
    const existedWords = [];

    for (const wordFamily of rawWordsFamilies) {
        existedWords.push(wordFamily._id);
        wordFamily.variations = wordFamily.variations.filter(word => word !== 'się');

        query[queryJoiner].push({ [field]: { $regex: wordFamily.variations.join("|"), $options: "i" }});
        allWords.push(...wordFamily.variations);


        if (searchWordsArray.includes(wordFamily._id)) {
            if (!additionalWordsObj[wordFamily._id]?.length || (searchWordsArray.filter(item => item === wordFamily._id)).length > additionalWordsObj[wordFamily._id]?.length) {
                wordsFamilies.push({ _id: wordFamily._id, primaryWord: wordFamily._id });
            }
            primaryFullObj[wordFamily._id] = wordFamily;
        }

        if (additionalWordsArr.includes(wordFamily._id)) {
            additionalFullObj[wordFamily._id] = wordFamily;
        }
       
        if (additionalWordsObj[wordFamily._id]?.length) {
            additionalWordsObj[wordFamily._id].forEach(arrayOfAdditionalWord => {
                wordsFamilies.push({
                    // ...wordFamily,
                    _id: `${wordFamily._id} ${arrayOfAdditionalWord.join(' ')}`,
                    additionalWords: arrayOfAdditionalWord,
                    primaryWord: wordFamily._id,
                })
            })
        }
    }


    // remove "additional Words" if not exists in dictionary
    // find words that does NOT exists in DB
    // const notExistedWords = [...searchWordsArray, ...additionalWordsArr].filter(searchedWord => !existedWords.includes(searchedWord) && searchedWord.length > 2) || [];

    console.log(`${endTimeWordsFamilies.getTime() - startTimewordsFamilies.getTime()}ms = get Words Families Time`);

    // if (!existedWords.length) {
    //     return new Response(JSON.stringify({
    //         remedies: [],
    //         warning: {
    //             notExistedWordsMessage: 'Wszystkie słowa których wyszukujesz nie istnieją w bazie! Sprawdź pisownię lub użyj synonimów i wyszukaj jeszcze raz.',
    //             notExistedWords,
    //         },
    //     }), { status: 200 })
    // }

    // if (!wordsFamilies.length) {
    //     return new Response(JSON.stringify({
    //         remedies: [],
    //         warning: {
    //             notExistedWordsMessage: 'Pierwsze słowo którego szukasz nie istnieje w słowniku - popraw je i wyszukaj ponownie :)',
    //             notExistedWords,
    //         },
    //     }), { status: 200 })
    // }



    return { query, allWordsVariations: rawWordsFamilies?.map(rwf => rwf.variations)?.flat() || [] };

}


export const createLookupParentPipeline = (numberOfLookups = 5) => {
    const pipeline = [];
    
    for (let i = 1; i <= numberOfLookups; i++) {
        const previousParentField = i === 1 ? "parent" : `parentObj${i - 1}.parent`;
        const currentParentObjField = `parentObj${i}`;
        
        // $lookup stage
        pipeline.push({
            $lookup: {
                from: "repertorysymptoms",
                localField: previousParentField,
                foreignField: "_id",
                as: currentParentObjField,
            },
        });

        // $unwind stage
        pipeline.push({
            $unwind: {
                path: `$${currentParentObjField}`,
                preserveNullAndEmptyArrays: true,
            },
        });
    }

    return pipeline;
}

// export const joinParency = (obj, joinSign, reverse) => {

//     let joinedParencyArray = [];
    
//     for (let i = 4; i >= 1; i--) {
//         if (obj[`parentObj${i}`]?.name) {
//             joinedParencyArray.push(`${obj[`parentObj${i}`].name}`);
//         }
//     }

//     joinedParencyArray.push(obj.name);

//     if (reverse) {
//         joinedParencyArray = joinedParencyArray.reverse();
//     }

//     const joinedParency = joinedParencyArray.join(joinSign);

//     return joinedParency;
// }

export const getWordsVariations = (searchWordsArray, additionalWordsArr) => {
    console.log([...searchWordsArray, ...additionalWordsArr], ' [...searchWordsArray, ...additionalWordsArr]')
    return PolishWordArray.aggregate([
		{
			$match: {
				variations: { $in:  [...searchWordsArray, ...additionalWordsArr] }
			},
		},
		{
			$group: {
				_id: null,
				variations: { $push: '$variations' },
			}
		},
		{
			$addFields: {
				variations: {
                    "$reduce": {
                        "input": "$variations",
                        "initialValue": [],
                        "in": { "$concatArrays": [ "$$value", "$$this" ] }
                    }
				},
			},
		},
	]);
};

export const checkIfTextContainsRemedies = (text, remedyObjShortNames) => {


    const wordsInText = text
        .toLowerCase()
        .replace(/[.,:;!?]/g, ' ') // Remove special characters
        .split(/\s+/) // Split by whitespace
        .map(word => word.trim()); // Sanitize and split words

    const hasRemedy = wordsInText.some(word => remedyObjShortNames[word])

    return hasRemedy;
};

export const getRepSynNameAndRemediesSNFromText = (text, remedyObjShortNames) => {

    const wordsInText = text.toLowerCase().split(/\s+/) // Split by whitespace
    
    const nameWords = [];
    const shortNames = wordsInText.reduce((acc, word) => {
        
        if (!remedyObjShortNames[word]) {
            nameWords.push(word)
        }
        else {
            acc.push(word)
            return acc
        }
        
        return acc;

    }, []); // Sanitize and split words



    return { name: nameWords.join(' '), shortNames };
}

export const removePolishChars = (text) => {
    const polishCharsMap = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
    };

    return text.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, char => polishCharsMap[char] || char);
}
