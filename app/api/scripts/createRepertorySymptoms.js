import { connectToDB } from "@utils/database";
import Remedy from '@models/remedy';
import RepertorySymptom from '@models/repertorySymptom';
import RepertorySymptomItem from '@models/repertorySymptomItem';
import { REMEDY_PROPERTY } from '@common/constants';

const getRemedyProperty = (rawProperty) => {
    switch(rawProperty)  {
        case 'lewa':
            return REMEDY_PROPERTY.LEFT;
        case 'prawa':
            return REMEDY_PROPERTY.RIGHT;
        case 'zimno':
            return REMEDY_PROPERTY.COLD;
        case 'ciepło':
            return REMEDY_PROPERTY.WARM;
        case 'lewa górna prawa dolna':
            return REMEDY_PROPERTY.LEFT_UP_RIGHT_DOWN;
        case 'lewa dolna prawa górna':
            return REMEDY_PROPERTY.LEFT_DOWN_RIGHT_UP;
    }
}

export const createRepertorySymptoms = async (repertorySymptomObj, imageCatalogPath) => {

    if (!imageCatalogPath) {
        console.log('NO IMAGE CATALOG PATH');
        return new Response("NO IMAGE CATALOG PATH", { status: 500 });
    }

    const repertorySymptomArr = Object.entries(repertorySymptomObj);
    const remediesObj = {}; // { remedyShortName: remedyId }
    try {
        await connectToDB();
        let startTime = new Date(); 

        // const arrOfIllnesToProcess = arrOfIllness;
        for await (const [name, arrOfRemedyShortNames] of repertorySymptomArr) {
            console.log(name, ':', arrOfRemedyShortNames?.length)
            const imageName = name.replaceAll('Q', '-');
            const [adjustedName, rawProperty] = name.replaceAll('_', ' ').replaceAll('*', '').split('Q'); 

            console.log(adjustedName, rawProperty, 'adjustedName, rawProperty')

            const property = getRemedyProperty(rawProperty);

            let repSymptom = await RepertorySymptom.findOne({ name: adjustedName, ...(property && { property }) });
            if (!repSymptom?._id) {
                repSymptom = await RepertorySymptom.create({ name: adjustedName, description: adjustedName, property, imagePath: `${imageCatalogPath}${imageName}.jpg` });
            }
            else {
                console.log('RepertodySymptom exists: ', adjustedName, repSymptom?._id)
            }

            if (repSymptom?._id) {
                // console.log('Illness:', illnessObj.illnessName, 'created:', illness?._id);

                for (const shortName of arrOfRemedyShortNames) {
                    const strength = shortName.includes('*') ? 4 : 1;
                    const adjustedShortName = shortName?.toLowerCase()?.replaceAll('*', '');

                    if (!remediesObj[adjustedShortName]) {
                        const remedy = await Remedy.findOne({ shortName: adjustedShortName });
                        
                        if (remedy?._id) {
                            remediesObj[adjustedShortName] = remedy._id;
                        }
                    }

                    const remedyId = remediesObj[adjustedShortName];

                    const repertorySymptomItem = await RepertorySymptomItem.findOne({
                        shortName: adjustedShortName,
                        remedy: remedyId,
                        repertorySymptom: repSymptom?._id,
                        strength,
                    });

                    if (!repertorySymptomItem?._id) {
                        await RepertorySymptomItem.create({
                            shortName: adjustedShortName,
                            remedy: remedyId,
                            repertorySymptom: repSymptom._id,
                            rawProperty,
                            strength,
                        });
                    }
                    else {
                        console.log('RepertorySymptomItem exists:', adjustedName, '-', adjustedShortName, 'Remedy:', remedyId, 'RepSymp',repSymptom?._id)
                    }
                }
            }
            else {
                console.log('RepertorySymptomItem:', illnessName, 'NOT created!!!.');
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

