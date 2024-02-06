import Description from '@models/description';
import { connectToDB } from "@utils/database";
import WordSentence from '@models/descriptionWord';
import DescriptionSentence from '@models/descriptionSentence';
import PolishWordArray from '@models/polishWordArray';
import { sanitizedGetBetter, sanitizedGetWorse } from '@app/constants';
import mongoose from 'mongoose';
import DescriptionCommonWords from '@models/descriptionCommonWords';

// get the most common word variations from description
export const POST = async (request) => {
    const { mind, general, specyfic, positiveModalities, negativeModalities } = await request.json();
try {
    await connectToDB();
    let startTime = new Date(); 
	
	// !!!!!!!!!! DELETE MANY !!!!!!!!!!!!
	// await DescriptionCommonWords.deleteMany({});

    const cursor = await Description.find({}, { _id: 1, wordSentencesAsText: 1, remedyName: 1 }).cursor();
    let counter = 0;
	for await (const desc of cursor) {
        counter += 1;
        // console.log(desc)
        // const wordSentencesObj = JSON.parse(desc.wordSentencesAsText); // { 'word': [0 ,2 , 3] }

		console.log(desc.remedyName)
		const variationsObj = {};
		const wordSentences = JSON.parse(desc.wordSentencesAsText);
		for (const [word, sentences] of Object.entries(wordSentences)) {
			// console.log(word, 'word')
			const polWordArrays = await PolishWordArray.find({ variations: word }, { variations: 1 });
			for (let i = 0; i < polWordArrays.length; i++) {
				const polWordArray = polWordArrays[i];
				const hasIntersection = ['lub', 'pacjent', 'które', 'są', 'lek', 'być', 'siebie', 'cierpieć', 'stan', 'leczyć', 'ale', 'jak', 'jeden', 'jedni', 'jego', 'jej', 'jako', ...sanitizedGetBetter, ...sanitizedGetWorse].some(value => polWordArray.variations.includes(value));
				// skip unwanted words
				if (hasIntersection) {
					continue;
				} 

				const strId = polWordArray._id.toString();
				if (!variationsObj[strId]) {
					variationsObj[strId] = { points: 0, words: [], sentences: [], description: desc._id, descName: desc.remedyName }
				}
				variationsObj[strId].points += sentences.length || 0;
				variationsObj[strId].sentences.push(...sentences);
				variationsObj[strId].words.push(word);
				variationsObj[strId].polishWordArray = polWordArray._id;
				i++;
			}
		}
		// console.log('grouped');
		let sortedArr = Object.entries(variationsObj).sort((a, b) =>  b[1].points - a[1].points);
		// sortedArr = sortedArr.slice(0, 100);
		// const savedPoint = sortedArr.slice(14,15)[0][1].points;
		// console.log(savedPoint, 'savedPoint')
		// // console.log(savedPoint[0][1], 'points to slice');
		// // console.log(sortedArr)
		// // console.log(sortedArr, 'sortedArr')
		// sortedArr = sortedArr.filter(item => (item[1].points > 3 && item[1].points >= savedPoint.points));
		// console.log(sortedArr[0])
		// console.log(sortedArr.map(i => `${i[1].words}: ${i[1].points}`), desc.remedyName)
		const arrToDB = sortedArr.map(([variationId, obj]) => obj);
		const filteredArrToDb = arrToDB.filter(item => item.points > 1);
		// console.log(filteredArrToDb[0]);
		const x = await DescriptionCommonWords.insertMany(filteredArrToDb);
		// console.log(x, 'inserted?');
		// console.log(sortedArr.split(10));
    }
    let endTime = new Date(); 
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}


