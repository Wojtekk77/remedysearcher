import Remedy from '@models/remedy';
import RepertorySymptom from '@models/repertorySymptom';
import RepertorySymptomItem from '@models/repertorySymptomItem';
import { REMEDY_PROPERTY } from '@common/constants';
import { getArrayOfRemedySympt } from '../repertoryImageJSON/route';

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

export const saveImageJSONsAsRepertorySymptom = async ({ property }) => {

    console.log('=== saveImageJSONsAsRepertorySymptom ===');

    try {
        // {
        //      _id: obj._id,
        //      imagePath: obj.imagePath,
        //      property: REMEDY_PROPERTY.UMYSL,
        //      arrOfObjs: [{ name: key, remedies: value, parentName }, {}, ...],
        // }
        const arrOfRemedyObjShortNames = await Remedy.find({ destroyed: { $ne: true } });
        const remedyObjShortNames = arrOfRemedyObjShortNames.reduce((acc, remedy) => {
            if (!acc[remedy.shortName]) {
                acc[remedy.shortName] = remedy._id;
            }

            return acc;
        }, {});

        const imageJSONs = await getArrayOfRemedySympt(property, true, remedyObjShortNames);


        // const arrOfIllnesToProcess = arrOfIllness;
        for await (const imageJSON of imageJSONs) {
            const { imagePath, property, arrOfObjs } = imageJSON;

            let orderNumber = 1;
            for await (const obj of arrOfObjs) {

                const { name, remedies: arrOfRemedyShortNames, parentName } = obj;

                console.log(name, ':', 'remedies count:', arrOfRemedyShortNames?.length)

                let repSymptom = await RepertorySymptom.findOne({ imagePath, name, property, parentName, description: name.toLowerCase() });

                if (!repSymptom?._id) {
                    repSymptom = await RepertorySymptom.create({ name, description: name.toLowerCase(), property, imagePath, parentName, orderNumber });
                    orderNumber += 1;
                }
                else {
                    console.log('RepertodySymptom exists: ', repSymptom?.name, repSymptom?._id)
                }

                if (repSymptom?._id) {
                    await saveRepSymptomItemToDB({ arrOfRemedyShortNames, remedyObjShortNames, repSymptom });
                }

            }

            
        }
        
        let endTime = new Date(); 
        console.log(`END Total Time ${endTime.getTime()}`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}

export const saveRepSymptomItemToDB = async ({ arrOfRemedyShortNames = [], useStarAs4Mark = false, remedyObjShortNames, repSymptom }) => {

    const itemsToInsert = [];

    for (const shortName of arrOfRemedyShortNames) {
        
        const strength = shortName.includes('*') ? 4 : 1;
        const adjustedShortName = shortName?.toLowerCase()?.replaceAll('*', '');

        let remedyId = remedyObjShortNames[adjustedShortName];

        if (!remedyId) {
            let remedy = await Remedy.findOne({ shortName: adjustedShortName });
            
            if (!remedy?._id) {
                remedy = await Remedy.findOne({ otherNames: adjustedShortName });
            }
            
            if (remedy?._id) {
                remedyObjShortNames[adjustedShortName] = remedy._id;
            }
        }

        const repertorySymptomItem = await RepertorySymptomItem.findOne({
            repertorySymptom: repSymptom?._id,
            shortName: adjustedShortName,
            remedy: remedyId,
            strength,
        });

        if (repertorySymptomItem?._id) {
            // console.log('rep sympt item find', repertorySymptomItem?.shortName, repertorySymptomItem?.remedy)
        }

        if (!repertorySymptomItem?._id) {
            // console.log('Add new item to array:', adjustedShortName, remedyId, repSymptom.name, strength);
            // await RepertorySymptomItem.create({
            //     shortName: adjustedShortName,
            //     remedy: remedyId,
            //     repertorySymptom: repSymptom._id,
            //     strength,
            // });
            itemsToInsert.push({
                shortName: adjustedShortName,
                remedy: remedyId,
                repertorySymptom: repSymptom._id,
                strength,
            })

        }
        else {        
            console.log('RepertorySymptom Item exists for:', repSymptom.name, '-', adjustedShortName, 'Remedy:', remedyId, 'RepSymp',repSymptom?._id)
        }

    }

    console.log('Create as group:', itemsToInsert?.length, 'items');
    await RepertorySymptomItem.insertMany(itemsToInsert);
    console.log('Ok');
};