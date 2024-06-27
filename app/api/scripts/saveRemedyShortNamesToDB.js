import Description from '@models/description';
import { connectToDB } from "@utils/database";
import OpenAI from "openai";
import { appendTextToFile, base64_encode, getFilesFromCatalog } from './helpers';
import { arrayOfRemedyNamesAndShortNames } from './kent/shortname-fullname';
import Symptom from '@models/symptom';
import { alreadyInDBWithoutShortName } from './kent/alreadyInDBWithoutShortName';
import Remedy from '@models/remedy';



const updateWrongNamesToKentRepNamesAndChangeRemReference = async (arrayOfRemediesInDBWithoutShortNames) => {

    for (const newRemedyProps of arrayOfRemediesInDBWithoutShortNames) {
        // "_id" : "lobelia",
        // "shortNameOld" : null,
        // shortName: 'Lob', name: 'Lobelia inflata'
        const { _id, shortNameOld, shortName: shortNameRaw, name: newNameRaw } = newRemedyProps;

        if (!newNameRaw) {
            console.log('Quick early no newName:', newNameRaw);
            continue;
        }
        
        const shortName = shortNameRaw?.toLowerCase();
        const newName = newNameRaw?.toLowerCase()
        const nameToMove = _id?.toLowerCase();
        
        if (!newName || newName === nameToMove) {
            console.log('QUICK EARLY newName === nameToMove', newName)
            continue;
        }
        
        const wrongRemedy = await Remedy.findOne({ name: nameToMove });
        const existingRemedy = await Remedy.findOne({ name: newName });
        
        if (newName && existingRemedy?._id && wrongRemedy?._id) {
            await Symptom.updateMany({ remedy: wrongRemedy._id }, { $set: { remedy: existingRemedy._id } })
            await Description.updateMany({ remedy: wrongRemedy._id }, { $set: { remedy: existingRemedy._id, remedyName: existingRemedy.name } })
            
            // destroy wrong remedy
            if (newName !== nameToMove) {
                await Remedy.updateOne({ name: wrongRemedy.name }, { $set: { destroyed: true } });
            }
            
            // change name to good set shortName to good remedy
            const updated = await Remedy.updateOne({ name: existingRemedy.name }, { $set: { shortName, otherNames: [nameToMove] } });
        }

        if (newName && wrongRemedy?._id && !existingRemedy?._id) {
            const updated = await Remedy.updateOne({ name: wrongRemedy.name }, { $set: { name: newName, shortName, otherNames: [nameToMove] } });
            await Description.updateOne({ remedyName: wrongRemedy.name }, { $set: { remedyName: newName } })
        }
    }

};

// save shortnames and update names to the names that we have in kent repertory
export const saveRemedyShortNamesToDB = async (request) => {

    
    const alreadyInDB = await Remedy.find({}).sort({ name: 1 });
    const namesInDB = alreadyInDB.map(remedy => remedy.name);
    
    try {
        console.log('DUPLICATE NAMES UPDATE START')
        // update to kent name and move symptoms
        await updateWrongNamesToKentRepNamesAndChangeRemReference(alreadyInDBWithoutShortName);
        console.log('DUPLICATED NAMES UPDATED')

        let i = 1;
        let j = 1;
        for (const remedy of arrayOfRemedyNamesAndShortNames) {
            const remedyName = remedy.name.toLowerCase();
            const remedyShortName = remedy.shortName.toLowerCase();

            if (namesInDB.includes(remedyName)) {

                await Remedy.updateOne({ name: remedyName }, { $set: { shortName: remedyShortName }});
                console.log(`${i} update ${remedyName}: ${remedyShortName}`)
                i += 1;
            }
            else {
                await Remedy.create({ name: remedyName, shortName: remedyShortName })
                j += 1;
                console.log(j, 'created:', remedyName);
                // appendTextToFile('app/api/scripts/kent', 'remediesNotInDB.js', `{ shortName: "${remedyShortName}", name: "${remedy.name.toLowerCase()}" }, \n`);
            }
        }

        let endTime = new Date(); 
        console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}

