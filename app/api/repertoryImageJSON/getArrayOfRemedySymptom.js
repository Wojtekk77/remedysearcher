import { REMEDY_PROPERTY } from '@common/constants';
import RepertoryImageJSON from '@models/repertoryImageJSON';
import { atLeastXCapitalizedInARow, isJsonString } from '@utils';

export const getArrayOfRemedySympt = async (property = REMEDY_PROPERTY.UMYSL, skipUsed = true) => {

    const repertoryImageJSONsRaw = await RepertoryImageJSON.find({ property, imageAlreadyConverted: { $ne: skipUsed } }).sort({ imagePath: 1 });
    let repertoryImageJSONs = [];
    let parentName = '';
    let arrOfObjs = [];

    repertoryImageJSONsRaw.forEach(obj => {

        console.log(obj.imagePath)
        if (!isJsonString(obj.json)) {
            console.log('not valid - skip')
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
