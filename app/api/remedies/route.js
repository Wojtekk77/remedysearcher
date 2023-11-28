import Description from '@models/description';
import { connectToDB } from "@utils/database";
import { createEaseRegexPatternFromArray, getDescProperties, getSearchProps, getWordsFamiliesWithSentences } from './helpers';

export const POST = async (request) => {
    const { mind, general, specyfic, positiveModalities, negativeModalities } = await request.json();
    const startTime = new Date(); 
    const [searchWordsArray, additionalWordsObj, additionalWordsArr] = getSearchProps({mind, general, specyfic, positiveModalities, negativeModalities});

try {
    await connectToDB();
    let startTimewordsFamilies = new Date(); 
    let wordsFamilies = await getWordsFamiliesWithSentences(searchWordsArray, additionalWordsArr);
 
    let endTimeWordsFamilies = new Date(); 

    if (!wordsFamilies.length) {
        return new Response(JSON.stringify({ remedies: [{ remedyName: 'Nie znaleziono remediów' }] }), { status: 200 })
    }

    console.log(`Get Words Families Time: ${startTimewordsFamilies.getTime() - endTimeWordsFamilies.getTime()}ms`);

    const query = { '$and': [] };
    const allWords = [];
    for (const wordFamily of wordsFamilies) {

        wordFamily.variations = wordFamily.variations.filter(word => word !== 'się');
        query['$and'].push({ words: { $in: wordFamily.variations }});
        allWords.push(...wordFamily.variations);
    }
    console.log(query);
    // const descs = await Description.find(query);

    startTimewordsFamilies = new Date(); 
    const descs = await Description.aggregate([
        { 
            // $match: { _id: { $in: commDesc } },
            $match: query,
        },
        {
            $project: {
                _id: 1,
                sentences: 1,
                remedyName: 1,
                remedy: 1,
                wordSentencesAsText: 1,
            }
        },
        {
            $limit: 50,
        }
    ])

    endTimeWordsFamilies = new Date(); 
    console.log(`Get Description.aggregate Time: ${startTimewordsFamilies.getTime() - endTimeWordsFamilies.getTime()}ms BY WORDS`);

    const result = {};
    descs.forEach(desc => {
        desc.wordSentences = JSON.parse(desc.wordSentencesAsText);
        const propertiesObj = getDescProperties(desc, wordsFamilies, additionalWordsObj, additionalWordsArr);
        //escape early if one of 'properties' has empty sentence array
        if (Object.values(propertiesObj).some(obj => obj.sentenceNumbers?.length === 0)) {
            return;
        }

        let totalPoints = 0;
        Object.values(propertiesObj).forEach(obj => {
            totalPoints += obj.sentenceNumbers?.length || 0 
        });
        result[desc.remedyName] = { ...propertiesObj, totalPoints, remedyName: desc.remedyName };
    });
    console.log(4)
    const savedPoint = Object.values(result).sort((a , b) => b.totalPoints - a.totalPoints).slice(9,10);
    console.log(5)
    Object.entries(result).forEach(([remedyName, valueObj]) => {
        if (savedPoint && valueObj.totalPoints < savedPoint[0]?.totalPoints) {
            delete result[remedyName];
        } else {
            Object.entries(valueObj).forEach(([property, valueOfProp]) => {

                if (typeof valueOfProp === 'object') {

                    const pattern = createEaseRegexPatternFromArray(valueOfProp.usedWords.sort((a,b) => b.length - a.length));
                    result[remedyName][property].description = valueOfProp.description?.replace(pattern, (match) => {
                        // wordOccurrence += 1;
                        const color = '#aa9922';
                        return `<span style="color:${color}; font-weight:bold">${match}</span>`;
                    });
                }
            });
        }
    })
    console.log(6)

    const arrOfRemedies = Object.values(result).sort((a , b) => b.totalPoints - a.totalPoints);
    // [{ totalPoints, remedyName, [word]: { word, 'krew', remedyId, remedyName, sentenceNumbers: [], usedWords: [], description: '' } }]

    const endTime = new Date(); 
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({ remedies: arrOfRemedies }), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}