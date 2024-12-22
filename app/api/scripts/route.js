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
import { saveRemedyShortNamesToDB } from './saveRemedyShortNamesToDB';
import { boeninghausenExtractShortnames } from './boeninghausenExtractShortnames';
import { gpt4oVectorSearch } from './gpt4oVectorSearch.js';
import { createAISymptoms } from './createAISymptoms';
import { convertImagesToText } from './convertImagesToText';  
import { createRepertorySymptoms } from './createRepertorySymptoms';
import { jsonLeftRight } from './AICreated/jsonLeftRight';
import { REMEDY_PROPERTY, REMEDY_PROPERTY_NAME } from '@common/constants';
import { saveImageJSONsAsRepertorySymptom } from './saveImageJSONsAsRepertorySymptom';
import { createDisplayNameForRepSymptom } from './createDisplayNameForRepSymptom';
import { takeRemediesShortnamesFromNameToRSItem } from './takeRemediesShortnamesFromNameToRSItem';
import { removePolishChars } from '../helpers';
import { splitRepertorySymptomsName } from './splitRepertorySymptomsName';

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
    // START JAK SIE OKAŻE, ŻE PONIŻSZE TRZEBA PUŚCIĆ NA LIVE TO ZMIEŃ ARGUMENTY NA OBIEKT
    // await convertImagesToText(undefined, 'coldWarmRemedies.js');
    // await convertImagesToText(`
    //     Dostaniesz zdjęcie z posegregowanymi wyrazami. Zapisz je w formacie JSON.
    //     Wygeneruj obiekt JSON z tablicą wyrazów.
    //     Jeżeli dany wiersz ze zdjęcia kończy się to dodaj wyraz "enter" do tablicy.
    //     To jest bardzo ważne aby dodać wyraz "enter" za każdym razem jak przechodzisz do kolejnego wiersza.
    //     `,
    //     'jsonLeftRighSides.js',
    //     // 'app/api/scripts/leftRightSide',
    // );
    // STOP

    // await gpt4oVectorSearch();
    // await saveRemedyShortNamesToDB();
    // await boeninghausenExtractShortnames();

    // START
    // scripts to run on remote DB:
    // 1. Save and update new names to DB
    // await saveRemedyShortNamesToDB();
    // 2. Create AI generated symptoms that will be visible only for admins (Gaba could update texts)
    // await createAISymptoms()
    // FINISHED 2024.07.12
    // console.log('1')
    // await createRepertorySymptoms(jsonLeftRight, 'https://srv44093.seohost.com.pl/zdjecia/');
    // console.log('end')
    // START 
    // scripts to run on remote DB:
    // await createRepertorySymptoms(jsonLeftRight);
    // FINISHED 2024.07.31

    // // TO DO START
    // // Odpalić gdy wrzucone zostaną nowe zdjęcia! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! 
    // const property = REMEDY_PROPERTY.OKO; // zmien tez imgServerPath
    // const adjustedPropertyName = removePolishChars(REMEDY_PROPERTY_NAME[property].toLowerCase()).split(' ').join('_');

    // await convertImagesToText({

    //     text: `
    //         Zapisz tekst w formacie JSON.
    //         Nie pomiń żadnego znaku!

    //         Kluczami są pełne wyrażenia.
    //         Jeżeli klucz się powtórzy to stwórz nowy klucz dodając znak ":" na końcu klucza.

    //         Wartościami są tablice ze skrótami nazw leków homeopatycznych.
    //     `,
    //     saveFileName: 'repertorySymptomsBrain8.js',
    //     imgServerPath: `https://srv44093.seohost.com.pl/zdjecia/${adjustedPropertyName}/`, // !!! tutaj też podmien
    //     saveToFile: false,
    //     saveToDB: true,
    //     property,
    //     updateExistingFiles: true,
    //     // 'app/api/scripts/leftRightSide',
    // });


    // await saveImageJSONsAsRepertorySymptom({ property })

    await splitRepertorySymptomsName({ property: 8 })

    // FINISHED


    // await createDisplayNameForRepSymptom();

    let endTime = new Date(); 
	
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response(`Script failed: ${error}`, { status: 500 });
    }
}


// [
// "alumina phosphorica",
// "natrium silicatum",
// "vespa vulgaris",
// "zincum phosphoricum",
// "candida albicans",
// "oscillococcinum",
// "passiflora",
// "pilocarpinum",
// ]
