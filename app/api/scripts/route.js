import Description from '@models/description';
import { connectToDB } from "@utils/database";
import WordSentence from '@models/descriptionWord';
import DescriptionSentence from '@models/descriptionSentence';
import PolishWordArray from '@models/polishWordArray';
import { sanitizedGetBetter, sanitizedGetWorse } from '@app/constants';
import mongoose from 'mongoose';
import DescriptionCommonWords from '@models/descriptionCommonWords';
import { createDescCommWords } from './createDescCommWords';
import { insertManyDescCommWordsFromLocal } from './insertManyDescCommWordsFromLocal.js';
import { createNewRemedies } from './createNewRemedies';
import { createClinicalSyndroms } from './createClinicalSyndroms';

// get the most common word variations from description
export const POST = async (request) => {
    const { mind, general, specyfic, positiveModalities, negativeModalities } = await request.json();
try {
    await connectToDB();

    let startTime = new Date(); 
	// await insertManyDescCommWordsFromLocal();
    // await createNewRemedies();
    await createClinicalSyndroms();

    let endTime = new Date(); 
	
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}


