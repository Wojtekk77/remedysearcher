import Description from '@models/description';
import { connectToDB } from "@utils/database";
import Statistics from '@models/statistics';
import mongoose from 'mongoose';
import { createEaseRegexPatternFromArray, getDescProperties, getSearchProps, getWordsFamiliesWithSentences } from './helpers';

export const POST = async (request) => {
    const jsonRequest = await request.json();
    const { mind, general, specyfic, positiveModalities, negativeModalities, userId } = jsonRequest;
    const startTime = new Date(); 
const [searchWordsArray, additionalWordsObj, additionalWordsArr] = getSearchProps({mind, general, specyfic, positiveModalities, negativeModalities});

try {
    await connectToDB();

    let startTimewordsFamilies = new Date(); 
    let wordsFamilies = await getWordsFamiliesWithSentences(searchWordsArray, additionalWordsArr);
 
    let endTimeWordsFamilies = new Date(); 

    if (!wordsFamilies.length) {
        await Statistics.create({ user: userId  ? new mongoose.Types.ObjectId(userId) : undefined, query: mind, results: 0 });
        return new Response(JSON.stringify({
            remedies: [{ totalPoints: 0, remedyName: 'Nie znaloziono remediów', id: 'Nie znaleziono remediów' }],
        }), { status: 200 })
    }

    console.log(`${endTimeWordsFamilies.getTime() - startTimewordsFamilies.getTime()}ms = get Words Families Time`);

    const query = { '$and': [] };
    const allWords = [];
    for (const wordFamily of wordsFamilies) {

        wordFamily.variations = wordFamily.variations.filter(word => word !== 'się');
        query['$and'].push({ words: { $in: wordFamily.variations }});
        allWords.push(...wordFamily.variations);
    }

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
    console.log(`${endTimeWordsFamilies.getTime() - startTimewordsFamilies.getTime()}ms Description.aggregate`);

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

    const savedPoint = Object.values(result).sort((a , b) => b.totalPoints - a.totalPoints).slice(9,10);

    Object.entries(result).forEach(([remedyName, valueObj]) => {
        if (savedPoint && valueObj.totalPoints < savedPoint[0]?.totalPoints) {
            delete result[remedyName];
        } else {
            Object.entries(valueObj).forEach(([property, valueOfProp]) => {

                if (typeof valueOfProp === 'object') {
                    result[remedyName].id = remedyName; // id needed for DataGrid
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

    const arrOfRemedies = Object.values(result).sort((a , b) => b.totalPoints - a.totalPoints);
    // [{ totalPoints, remedyName, [word]: { word, 'krew', remedyId, remedyName, sentenceNumbers: [], usedWords: [], description: '' } }]
    await Statistics.create({ user: userId  ? new mongoose.Types.ObjectId(userId) : undefined, query: mind, results: arrOfRemedies.length });
    const endTime = new Date(); 
    console.log(`${endTime.getTime() - startTime.getTime()}ms: Total Time`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({ remedies: arrOfRemedies }), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}