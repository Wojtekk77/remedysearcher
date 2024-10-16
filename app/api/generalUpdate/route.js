import { connectToDB } from "@utils/database";
import mongoose from 'mongoose';
import Illness from '@models/illness';
import Symptom from '@models/symptom';
import RepertorySymptom from '@models/repertorySymptom';
import RepertorySymptomItem from '@models/repertorySymptomItem';


export const getModel = (modelName) => {
    switch (modelName) {
        case 'symptom':
            return Symptom;
        case 'illness':
            return Illness;
        case 'repertorySymptom':
            return RepertorySymptom;
        case 'repertorySymptomItem':
            return RepertorySymptomItem;
        default: 
            return '';
    }
}

export const PATCH = async (request) => {

    const data = await request.json();

    const { modelName, _id, values } = data;

    try {
        await connectToDB();


        if (!_id || !modelName) {
            return new Response("Not find modelName", { status: 500 })
        }

        const model = getModel(modelName);

        // // Find the existing comment by ID
        let existingObj = await model.updateOne({ _id: new mongoose.Types.ObjectId(_id) }, { $set: { ...values } });

        if (!existingObj) {
            return new Response(`${modelName} not found`, { status: 404 });
        }

        const updatedObj = await model.findById(_id);

        return new Response(JSON.stringify({ [modelName]: updatedObj }), { status: 200 });

    } catch (error) {
        return new Response(`Error Updating ${modelName}, erro: ${error}`, { status: 500 });
    }
};

export const POST = async (request) => {

    const data = await request.json();
    const { modelName, _id, match, lookup } = data;

    try {
        await connectToDB();

        if (!modelName) {
            return new Response("Not find modelName", { status: 500 })
        }

        const model = getModel(modelName);

        let modelObj = {};
        if (lookup?.$lookup?.from) {

            const pipeline = [
                _id ? { $match: { _id: new mongoose.Types.ObjectId(_id) } } : match,
                lookup,
            ];

            modelObj = await model.aggregate(pipeline)
        }
        else {
            modelObj = await model.findById(_id);
        }

        return new Response(JSON.stringify({ [modelName]: modelObj }), { status: 200 });

    } catch (error) {
        return new Response(`Error Getting ${modelName}`, { status: 500 });
    }
};
