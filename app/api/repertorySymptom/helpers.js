import mongoose from 'mongoose';
import RepertorySymptom from '@models/repertorySymptom'
import { removePolishChars } from '../helpers';

const CLEAN_REGEX = /[^\w\u00C0-\u017F/ ]+/g; 

export const createNameWords = (name) => {
    const cleanedName = name.replace(CLEAN_REGEX, '');
    const segments = cleanedName.split(/\s+/);
    const nameWords = segments.flatMap(segment => segment.includes('/') 
        ? segment.split('/').map(part => segment.slice(0, segment.length - part.length) + part) 
        : [segment]
    ).filter(Boolean).map(word => word.toLowerCase());
    const sanitizedName = removePolishChars(nameWords?.join(' ')?.toLowerCase());

    return { nameWords, sanitizedName };
}

export const repertorySymptomNameUpdate = async ({ name, _id }) => {

    const { nameWords, sanitizedName } = createNameWords(name);
    
    return RepertorySymptom.updateOne({ _id: new mongoose.Types.ObjectId(_id) }, { $set: { name: name, nameWords, sanitizedName } });

};


export const repertorySymptomCreate = async ({ values, checkIfExists = false }) => {

    let { orderNumber, imagePath, ...otherValues } = values

    if (checkIfExists) {
        const repertorySymptom = await RepertorySymptom.findOne({ property: values.property, name: values.name, imagePath: values.imagePath });
        
        if (repertorySymptom?._id) {
            console.log('Repertory symptom already exists: ', values.name, values.imagePath)
            return;
        }
    }

    let lastImageRepSymptomOrderNumber; 

    if (!orderNumber) {
        lastImageRepSymptomOrderNumber = await RepertorySymptom.find({ imagePath: values.imagePath }).sort({ orderNumber: -1 }).limit(1);
        orderNumber = lastImageRepSymptomOrderNumber[0].orderNumber + 1
    }

    return RepertorySymptom.create({ ...otherValues, imagePath, orderNumber, ...createNameWords(values.name) });
 
}