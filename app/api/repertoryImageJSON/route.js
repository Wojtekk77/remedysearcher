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
import { checkIfTextContainsRemedies, getRepSynNameAndRemediesSNFromText } from '../helpers';

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

export const getArrayOfRemedySympt = async (property = REMEDY_PROPERTY.UMYSL, skipUsed = true, remedyObjShortNames) => {

    const repertoryImageJSONsRaw = await RepertoryImageJSON.find({ property, imageAlreadyConverted: { $ne: skipUsed } }).sort({ imagePath: 1 });
    let repertoryImageJSONs = [];
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
            
               
                
                if (Array.isArray(value)) {

                    if (value?.length === 0 || typeof value[0] === 'string') {

                        if (value.includes(',')) {
                            value = value.split(',');
                        }

                        if (checkIfTextContainsRemedies(key, remedyObjShortNames)) {
                            const { name, shortNames } = getRepSynNameAndRemediesSNFromText(key, remedyObjShortNames);
                            key = name, 
                            value = [...new Set([...shortNames, ...value])].sort((a, b) => a.localeCompare(b));
                        }

                        arrOfObjs.push({ name: key, remedies: value })
                    }

                }
                else if (typeof value === 'object') {
                    const arrayOfKeyValue = getKeyValueFromObj({ obj: value, remedyObjShortNames })
                    arrOfObjs.push(...arrayOfKeyValue)
                }

        })
        repertoryImageJSONs.push({
            _id: obj._id,
            imagePath: obj.imagePath,
            property,
            arrOfObjs,
        })
        await RepertoryImageJSON.updateOne({ _id: obj._id }, { $set: { imageAlreadyConverted: true } })

    })
    return repertoryImageJSONs;
}

const getKeyValueFromObj = ({ obj, remedyObjShortNames }) => {
    const arrayOfKeyValue = [];
    Object.entries(obj).forEach(([key, value]) => {

        if (Array.isArray(value)) {


            
            
            if (value?.length === 0 || typeof value[0] === 'string') {


                if (value.includes(',')) {
                    value = value.split(',');
                }

                if (checkIfTextContainsRemedies(key, remedyObjShortNames)) {
                    const { name, shortNames } = getRepSynNameAndRemediesSNFromText(key, remedyObjShortNames);
                    key = name, 
                    value = [...new Set([...shortNames, ...value])].sort((a, b) => a.localeCompare(b));
                }

                arrayOfKeyValue.push({
                    name: key,
                    remedies: value,
                })
            }
        }
        else {
            const arr = getKeyValueFromObj({ obj: value, remedyObjShortNames })
            arrayOfKeyValue.push(...arr);
        }
        
    });

    return arrayOfKeyValue;
};
