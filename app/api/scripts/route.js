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
import { convertTextByOpenAI } from './convertTextByOpenAI';
import { convertImageToText } from './convertImageToText';
import { saveRemedyShortNamesToDB } from './saveRemedyShortNamesToDB';
import { boeninghausenExtractShortnames } from './boeninghausenExtractShortnames';
import { gpt4oVectorSearch } from './gpt4oVectorSearch.js';
import { createAISymptoms } from './createAISymptoms';

// get the most common word variations from description
export const POST = async (request) => {
    const { mind, general, specyfic, positiveModalities, negativeModalities } = await request.json();
    console.log('START SCRIPT')
try {
    await connectToDB();

    let startTime = new Date(); 
	// await insertManyDescCommWordsFromLocal();
    // await createNewRemedies();
    // await createClinicalSyndroms();
    // await convertTextByOpenAI();
    // await convertImageToText();
    // await gpt4oVectorSearch();
    // await saveRemedyShortNamesToDB();
    // await boeninghausenExtractShortnames();

    // scripts to run on remote DB:
    // 1. Save and update new names to DB
    // await saveRemedyShortNamesToDB();
    // 2. Create AI generated symptoms that will be visible only for admins (Gaba could update texts)
    await createAISymptoms()

    let endTime = new Date(); 
	
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response(`Script failed: ${error}`, { status: 500 });
    }
}


