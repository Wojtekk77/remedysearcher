import Description from '@models/description';
import { connectToDB } from "@utils/database";
import Statistics from '@models/statistics';
import mongoose from 'mongoose';
import { getDescProperties, getModalities, getSearchProps, getWordsFamiliesWithSentences, highlightText } from './helpers';

export const POST = async (request) => {
    const jsonRequest = await request.json();
    const { mind, general, specyfic, positiveModalities, negativeModalities, userId } = jsonRequest;
    const startTime = new Date(); 
const [searchWordsArray, additionalWordsObj, additionalWordsArr] = getSearchProps({mind, general, specyfic, positiveModalities, negativeModalities});

try {
    await connectToDB();
    let startTimewordsFamilies = new Date(); 
    let rawWordsFamilies = await getWordsFamiliesWithSentences(searchWordsArray, additionalWordsArr);
 
    let endTimeWordsFamilies = new Date(); 

    if (!rawWordsFamilies.length) {
        await Statistics.create({ user: userId  ? new mongoose.Types.ObjectId(userId) : undefined, query: mind, results: 0 });
        return new Response(JSON.stringify({
            remedies: [{ totalPoints: 0, remedyName: 'Nie znaloziono remediów', id: 'Nie znaleziono remediów' }],
        }), { status: 200 })
    }

    console.log(`${endTimeWordsFamilies.getTime() - startTimewordsFamilies.getTime()}ms = get Words Families Time`);

    const query = { '$and': [] };
    const allWords = [];
    const wordsFamilies = [];
    const additionalFullObj = {};
    const primaryFullObj = {};

    for (const wordFamily of rawWordsFamilies) {

        wordFamily.variations = wordFamily.variations.filter(word => word !== 'się');
        query['$and'].push({ words: { $in: wordFamily.variations }});
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

    startTimewordsFamilies = new Date(); 
    const descs = await Description.aggregate([
        { 
            // $match: { _id: { $in: commDesc } },
            $match: query,
        },
        {
            $limit: 50,
        },
        // {
        //     $lookup: {
        //         from: 'descriptioncommonwords',
        //         localField: '_id',
        //         foreignField: 'description',
        //         as: 'descCommonWords',
        //     },
        // },
        {
            $lookup:
               {
                 from: "descriptioncommonwords",
                 let: { descId: "$_id" },
                 pipeline: [
                    { $match:
                       { $expr:
                          { $and:
                             [
                               { $eq: [ "$description",  "$$descId" ] },
                            //    { $gte: [ "$instock", "$$order_qty" ] }
                             ]
                          }
                       }
                    },
                    { $sort: { points: -1 } },
                    { $limit: 20 }
                    // { $project: { stock_item: 0, _id: 0 } }
                 ],
                 as: "descCommonWords"
               }
        },
        {
            $match: {
                'descCommonWords.useful': { $ne: false },
            }
        },
        {
            $project: {
                _id: 1,
                sentences: 1,
                remedyName: 1,
                remedy: 1,
                wordSentencesAsText: 1,
                descCommonWords: 1,
            }
        },
    ])

    endTimeWordsFamilies = new Date(); 
    console.log(`${endTimeWordsFamilies.getTime() - startTimewordsFamilies.getTime()}ms Description.aggregate`);

    const result = {};
    descs.forEach(desc => {
        desc.wordSentences = JSON.parse(desc.wordSentencesAsText);
        // ęę tutaj nie bedziemy chieli przekazac rawWordFamilies a wordsFamilies, gdzie _id = ból_gardła, ból_slowo_slowo2
        const propertiesObj = getDescProperties(desc, wordsFamilies, additionalFullObj, primaryFullObj);
        //escape early if one of 'properties' has empty sentence array
        if (Object.values(propertiesObj).some(obj => obj.sentenceNumbers?.length === 0)) {
            return;
        }

        let totalPoints = 0;
        Object.values(propertiesObj).forEach(obj => {
            totalPoints += obj.points || 0;
        });
        result[desc.remedyName] = { ...propertiesObj, totalPoints, remedyName: desc.remedyName };
    });

    const savedPoint = Object.values(result).sort((a , b) => b.totalPoints - a.totalPoints).slice(9,10);

    Object.entries(result).forEach(([remedyName, valueObj], i) => {
        if (savedPoint && valueObj.totalPoints < savedPoint[0]?.totalPoints) {
            delete result[remedyName];
        } else {
            Object.entries(valueObj).forEach(([property, valueOfProp]) => {
                if (typeof valueOfProp === 'object') {
                    result[remedyName].id = remedyName; // id needed for DataGrid
                    result[remedyName][property].description = highlightText({ usedWords: valueOfProp.usedWords, text: valueOfProp.description, color: '#aa9922' })
                }
            });

            const desc = descs.find(d => d.remedyName === remedyName);

            const positiveModalities = getModalities({ desc, modality: 'poprawia' });
            const negativeModalities = getModalities({ desc, modality: 'pogarsza' });

            positiveModalities.description = highlightText({ usedWords: positiveModalities.usedWords, text: positiveModalities.description, color: '#32CD32' })
            negativeModalities.description = highlightText({ usedWords: negativeModalities.usedWords, text: negativeModalities.description, color: '#DC143C' })

            result[remedyName][positiveModalities.word] = positiveModalities;
            result[remedyName][negativeModalities.word] = negativeModalities;
            // console.log(desc.descCommonWords);
            result[remedyName]['Objawy kluczowe'] = { descId: desc._id, descCommonWords: desc.descCommonWords, totalPoints: 1 };
            
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