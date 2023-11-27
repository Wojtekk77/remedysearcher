import PolishWords from '@models/polishWords';

// type = 'mind', 'general', 'specyfic', 'modalities'
export const convertStringToObject = (words, type = 'mind') => {

    if (!words?.length) {
        return [];
    }
    // Split the input string by comma and trim each element
    const elements = words?.split(',').map(element => element.trim().toLowerCase());

    // Initialize an empty result array
    const result = [];

    // Iterate through the elements and convert them into objects
    for (const element of elements) {
        // Split each element by '+' or '-' to separate key and value
        const [key, value] = element.split(/\+|-/);

        // Determine the parsed value based on the presence of '+' or '-'
        let parsedValue = 0; // Default to 1 if no value is specified
        if (value !== undefined) {
            parsedValue = element.includes('+') ? parseInt(value) : -parseInt(value);
        }
        else {
            parsedValue = key.replace(/[^0-9]/g, "");
        }

        // Remove any numbers from the key and use it as the value
        const cleanedKey = key.trim().replace(/\d+/g, '');
        // Create an object and push it to the result array
        const obj = { word: cleanedKey, value: parsedValue, type }
        if (cleanedKey !== '' && cleanedKey !== ' ') {
            result.push(obj);
        }
    }

	return result;
}


export const getSearchProps = ({ mind, general, specyfic, positiveModalities, negativeModalities }) => {
    const mindArr = convertStringToObject(mind, 'mind');
    const generalArr = convertStringToObject(general, 'general');
    const specyficArr = convertStringToObject(specyfic, 'specyfic');
    // const positiveModalitiesArr = convertStringToObject(modalities, 'modalities');
    const positiveModalitiesArr = convertStringToObject(positiveModalities, 'positiveModalities');
    const negativeModalitiesArr = convertStringToObject(negativeModalities, 'negativeModalities');

    const additionalWordsObj = {};
    const additionalWordsArr = [];
    const searchWordsArray = [
        ...mindArr, ...generalArr, ...specyficArr, ...positiveModalitiesArr, ...negativeModalitiesArr
    ].map(item => { 
        if (item.word.includes(' ')) {

            const arrWords = item.word.split(' ')
            additionalWordsArr.push(...arrWords.slice(1));
            additionalWordsObj[arrWords[0]] = [...arrWords.slice(1)]
            return arrWords[0];
        }
        return item.word.toLowerCase();
    });

    // const wordsFamilyObj = [
    //     ...mindArr,
    //     ...generalArr,
    //     ...specyficArr,
    //     ...positiveModalitiesArr,
    //     ...negativeModalitiesArr].reduce((acc, item) => { acc[item.word] = { ...item, wordFamily: [item.word] }; return acc} ,{});
  
    return [searchWordsArray, additionalWordsObj, additionalWordsArr];
}


export const getWordsFamiliesWithSentences = async (searchWordsArray, additionalWordsArr) => {
	return PolishWords.aggregate([
		{
			$match: {
				name: { $in:  [...searchWordsArray, ...additionalWordsArr] }
			},
		},
		{
			$lookup: {
				from: 'polishwordarrays',
				localField: 'variations',
				foreignField: '_id',
				as: 'variations',
			},
		},
		{ 
			$unwind: { path: '$variations', preserveNullAndEmptyArrays: true },
		},
		{
			$group: {
				_id: '$name',
                name: { $push: '$name' },
				variations: { $push: '$variations.variations' },
				descriptions: { $max: '$variations.descriptions' },
				duplicatedWordsArray: { $sum: 1 },
			}
		},
        // {
        //     $match: {
        //         _id: { $nin: additionalWordsArr },
        //     }
        // },
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

export const createEaseRegexPatternFromArray = (wordsArray = [], joinedBy ='|') => {
	const regexPattern = new RegExp(`(${wordsArray.map(word => `${word}`).join(joinedBy)})`, 'giu');
	return regexPattern;
}

export const getIntersection = (arrA, arrB) => { 
    const setA = new Set(arrA);       
    const setB = new Set(arrB);
    const result = new Set(); 
    for (let i of setB) { 
        if (setA.has(i)) { 
            result.add(i); 
        } 
    } 
    return [...result]; 
} 

// wordFamily = [
//     {
//       _id: 'pewność',
//       name: [ 'pewność' ],
//       variations: [ 'pewność', 'pewny', 'pewnie', 'pewnością' ],
//       duplicatedWordsArray: 1
//     }
// ]
// additionalWordsArrOfObj= [
//     {
//       _id: 'siebie',
//       name: [ 'siebie' ],
//       variations: [ 'siebie', 'se', 'sobą', 'sobie' ],
//       duplicatedWordsArray: 1
//     }
// ]

export const getWordFamilyProperies = (desc, wordFamily, additionalWordsArrOfObj) => {

    const property = { word: wordFamily._id, remedyId: desc.remedy, remedyName: desc.remedyName, sentenceNumbers: [], usedWords: [], description: '' };
    wordFamily.variations.forEach(variationWord => {
    
        if (desc.wordSentences[variationWord]?.length) { // if description uses one of variationWords
            property.sentenceNumbers.push(...desc.wordSentences[variationWord]); // assign number of sentences where variationWord exists (word: [1,2,3,4])
            property.usedWords.push(variationWord);
            // descSentencesNum.push(desc.wordSentences[variationWord])
        }

    });

    const additionalProperties = [];
    if (additionalWordsArrOfObj.length) {

        additionalWordsArrOfObj.forEach((additionalWordFamily) => {

            const additionalPorp = { word: additionalWordFamily._id, remedyId: desc.remedy, remedyName: desc.remedyName, sentenceNumbers: [], usedWords: [], description: '' };
            // additionalWordFamily = { _id: 'żółć', variations: [żółć1, żółć2] }
            additionalWordFamily.variations.forEach(variationWord => {
                if (desc.wordSentences[variationWord]?.length) { // if description uses one of variationWords
                    additionalPorp.sentenceNumbers.push(...desc.wordSentences[variationWord]); // assign number of sentences where variationWord exists (word: [1,2,3,4])
                    additionalPorp.usedWords.push(variationWord);
                }
            });
            additionalProperties.push(additionalPorp);
            const propertySentecesIntesection = getIntersection(property.sentenceNumbers, additionalPorp.sentenceNumbers);
            property.sentenceNumbers = propertySentecesIntesection;
            property.usedWords = [...property.usedWords, ...additionalPorp.usedWords];
        });
    }


    property.sentenceNumbers = [...new Set(property.sentenceNumbers)].sort();
    property.usedWords = [...new Set(property.usedWords)].sort();
    property.sentenceNumbers.forEach(sentenceNumber => {
        property.description += `${desc.sentences[sentenceNumber]}. `;
    });

    return property
}

export const getDescProperties = (desc, wordsFamilies, additionalWordsObj = {}, additionalWordsArr) => {

    // propertiesObj = { 
        // żółć1: { word: wordFamily._id, remedyId: desc.remedy, remedyName: desc.remedyName, sentenceNumbers: [], usedWords: [], description: '' } 
        // żółć2: { word: wordFamily._id, remedyId: desc.remedy, remedyName: desc.remedyName, sentenceNumbers: [], usedWords: [], description: '' } 
    // }
    const propertiesObj = { totalPoints: 0 };
    wordsFamilies.forEach((wordFamily) => {

        let propertyName = wordFamily._id;
        // word will be processed in one of base words
        if (additionalWordsArr.includes(wordFamily._id)) {
            return;
        }

        let additionalWordsArrOfObj = [];
        if (additionalWordsObj[wordFamily._id]?.length) {
            additionalWordsArrOfObj = wordsFamilies.filter(obj => additionalWordsObj[wordFamily._id].includes(obj._id))
            // console.log(additionalWordsArrOfObj, 'in additionalWordsArrOfObj');
            propertyName += ` ${additionalWordsObj[wordFamily._id].join(' ')}`;
        }

        // wordFamily = {
        //   _id: 'żółć',
        //   variations: ['żółć1', 'żółć2', 'żółć3']
        // } // additionalWordsArrOfObj is the [wordFamily]
        const property = getWordFamilyProperies(desc, wordFamily, additionalWordsArrOfObj);
        property.word = propertyName;
        // property = { word: wordFamily._id, remedyId: desc.remedy, remedyName: desc.remedyName, sentenceNumbers: [], usedWords: [], description: '' }

        propertiesObj[propertyName] = property;
    });
    return propertiesObj;
}



