import Comment from "@models/comment";
import Statistics from '@models/statistics';
import { connectToDB } from "@utils/database";
import { getFilesFromCatalog } from '../scripts/helpers';
import { jsonLeftRight } from '../scripts/AICreated/jsonLeftRight';
import RepertorySymptom from '@models/repertorySymptom';
import RepertoryImageJSON from '@models/repertoryImageJSON';
import { isJSDocReadonlyTag } from 'typescript';
import { atLeastXCapitalizedInARow, isJsonString } from '@utils';
import { REMEDY_PROPERTY } from '@common/constants';

export const GET = async (request, { params }) => {

    try {
        await connectToDB()


        const repertoryImageJSONs = await getArrayOfRemedySympt();
        return new Response(JSON.stringify({ repertoryImageJSONs }), { status: 200 })


    } catch (error) {
        console.log('error:', error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const getArrayOfRemedySympt = async (property = REMEDY_PROPERTY.UMYSL, skipUsed = true) => {

    const repertoryImageJSONsRaw = await RepertoryImageJSON.find({ property, imageAlreadyConverted: { $ne: skipUsed } }).sort({ imagePath: 1 });
    let nameChierarchy = [];
    let repertoryImageJSONs = [];
    let parentName = '';
    let arrOfObjs = [];

    repertoryImageJSONsRaw.forEach(async obj => {

        console.log(obj.imagePath)
        if (!isJsonString(obj.json)) {
            console.log('not valid - skip')
            await RepertoryImageJSON.updateOne({ _id: obj._id }, { $set: { imageAlreadyConverted: false } })
            return;
        }
        arrOfObjs = [];
        Object.entries(JSON.parse(obj.json)).forEach(([key, value]) => {
            
                if (atLeastXCapitalizedInARow(key.substring(0, 6), 3)) {
                    parentName = key;
                }
                
                
                if (Array.isArray(value)) {

                    if (value?.length === 0 || typeof value[0] === 'string') {
                        arrOfObjs.push({ name: key, remedies: value, parentName })
                    }

                }
                else if (typeof value === 'object') {
                    const arrayOfKeyValue = getKeyValueFromObj({ parentName: key, obj: value })
                    arrOfObjs.push(...arrayOfKeyValue)
                }

        })
        repertoryImageJSONs.push({
            _id: obj._id,
            imagePath: obj.imagePath,
            property: REMEDY_PROPERTY.UMYSL,
            arrOfObjs,
        })
        await RepertoryImageJSON.updateOne({ _id: obj._id }, { $set: { imageAlreadyConverted: true } })

    })
    return repertoryImageJSONs;
}

const getKeyValueFromObj = ({ parentName, obj }) => {
    const arrayOfKeyValue = [];
    Object.entries(obj).forEach(([key, value]) => {

        if (Array.isArray(value)) {
            
            if (value?.length === 0 || typeof value[0] === 'string') {
                arrayOfKeyValue.push({
                    name: key,
                    parentName,
                    remedies: value,
                })
            }
        }
        else {
            const arr = getKeyValueFromObj({ parentName: `${parentName}, ${key}`, obj: value })
            arrayOfKeyValue.push(...arr);
        }
        
    });

    return arrayOfKeyValue;
};
