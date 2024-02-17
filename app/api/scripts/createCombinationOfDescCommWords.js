import Description from '@models/description';
import { connectToDB } from "@utils/database";
import WordSentence from '@models/descriptionWord';
import DescriptionSentence from '@models/descriptionSentence';
import PolishWordArray from '@models/polishWordArray';
import { sanitizedGetBetter, sanitizedGetWorse } from '@app/constants';
import mongoose from 'mongoose';
import DescriptionCommonWords from '@models/descriptionCommonWords';
import { getIntersection } from '../remedies/helpers';

// get the most common word variations from description
export const createCombinationOfDescCommWords = async () => {

   
	// await DescriptionCommonWords.deleteMany({});
    const cursor = await Description.find({}, { _id: 1, remedyName: 1 }).limit(1000).cursor();
    let counter = 0;
	for await (const desc of cursor) {
        counter += 1;

		const descCommWords = await DescriptionCommonWords.find({ description: desc._id });
		console.log(descCommWords.length, desc.remedyName, 'descCommWords.length')
		console.log('========================================================================')
		for (let i = 0; i < descCommWords.length - 1; i+=1) {
			const intersection = getIntersection(descCommWords[i].sentences, descCommWords[i+1].sentences);
			const wordsIntersection = getIntersection(descCommWords[i].words, descCommWords[i+1].words);
			if (intersection.length > 2 && wordsIntersection < 3) {
				// console.log(intersection.length, 'intersection.length')
				const id = `${descCommWords[i].description.toString()}`;
				const obj = { description: descCommWords[i].description, sentences: intersection, words: [descCommWords[i].words, descCommWords[i+1].words], descName: descCommWords[i].descName, points: intersection.length };
				// decsCommWordObj.push({ [id]: {} })
				console.log(obj.words, obj.points, desc.remedyName)
			}
		}
		console.log('zostaw to do momentu az usuniesz "zbędne słowa pojedyncze"')
		// // console.log('grouped');
		// let sortedArr = Object.entries(variationsObj).sort((a, b) =>  b[1].points - a[1].points);
		// // sortedArr = sortedArr.slice(0, 100);
		// // const savedPoint = sortedArr.slice(14,15)[0][1].points;
		// // console.log(savedPoint, 'savedPoint')
		// // // console.log(savedPoint[0][1], 'points to slice');
		// // // console.log(sortedArr)
		// // // console.log(sortedArr, 'sortedArr')
		// // sortedArr = sortedArr.filter(item => (item[1].points > 3 && item[1].points >= savedPoint.points));
		// // console.log(sortedArr[0])
		// // console.log(sortedArr.map(i => `${i[1].words}: ${i[1].points}`), desc.remedyName)
		// const arrToDB = sortedArr.map(([variationId, obj]) => obj);
		// const filteredArrToDb = arrToDB.filter(item => item.points > 1);
		// // console.log(filteredArrToDb[0]);
		// const x = await DescriptionCommonWords.insertMany(filteredArrToDb);
		// console.log(x, 'inserted?');
		// console.log(sortedArr.split(10));
    }
    // let endTime = new Date(); 
    // console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // // res.json({ remedies: result });
};
