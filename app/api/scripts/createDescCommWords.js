import Description from '@models/description';
import { connectToDB } from "@utils/database";
import WordSentence from '@models/descriptionWord';
import DescriptionSentence from '@models/descriptionSentence';
import PolishWordArray from '@models/polishWordArray';
import { sanitizedGetBetter, sanitizedGetWorse } from '@app/constants';
import mongoose from 'mongoose';
import DescriptionCommonWords from '@models/descriptionCommonWords';

// get the most common word variations from description

// Cleaning up the all DescriptionCommonWords is dumb as you need to set "isUseful" again to the removed words
// maybe new field to polishWordArray "isUseful" ?
 
export const createDescCommWords = async (request) => {
    let startTime = new Date(); 
	
	// !!!!!!!!!! DELETE MANY !!!!!!!!!!!!
	// await DescriptionCommonWords.deleteMany({});

    const cursor = await Description.find({}, { _id: 1, wordSentencesAsText: 1, remedyName: 1 }).cursor();
    let counter = 0;
	for await (const desc of cursor) {
        counter += 1;

		console.log(desc.remedyName)
		const variationsObj = {};
		const wordSentences = JSON.parse(desc.wordSentencesAsText);
		for (const [word, sentences] of Object.entries(wordSentences)) {

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

		let sortedArr = Object.entries(variationsObj).sort((a, b) =>  b[1].points - a[1].points);

		const arrToDB = sortedArr.map(([variationId, obj]) => obj);
		const filteredArrToDb = arrToDB.filter(item => item.points > 1);

		const x = await DescriptionCommonWords.insertMany(filteredArrToDb);

    }
    let endTime = new Date(); 

};
