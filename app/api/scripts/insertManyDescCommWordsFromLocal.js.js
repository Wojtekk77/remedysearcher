import DescriptionCommonWords from '@models/descriptionCommonWords';
import { descCommWordsLocal } from './descCommWordsLocal';

// get the most common word variations from description

// Cleaning up the all DescriptionCommonWords is dumb as you need to set "isUseful" again to the removed words
// maybe new field to polishWordArray "isUseful" ?
 
export const insertManyDescCommWordsFromLocal = async (request) => {
	
	let counter = 0;
	let arrObj = [];
	for await (const obj of descCommWordsLocal) {

        counter += 1;

		const modifiedObj = {
			_id: obj._id,
			points : obj.points,
			words: obj.words,
			sentences: obj.sentences,
			description: obj.description,
			polishWordArray: obj.polishWordArray,
			descName: obj.descName,
			useful: obj.useful,
		};

		arrObj.push(modifiedObj);
		if (counter >= 1000) {
			await DescriptionCommonWords.insertMany(arrObj);
			counter = 0;
			arrObj = [];
			console.log('Inserted: 1000')
		}
    }	

	await DescriptionCommonWords.insertMany(arrObj);
	console.log('Finish!')
};
