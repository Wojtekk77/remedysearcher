import Description from '@models/description';
import { connectToDB } from "@utils/database";
import Statistics from '@models/statistics';
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
    console.log(data, 'data')

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
        return new Response(JSON.stringify({ repertorySymptomItem: updatedObj }), { status: 200 });

    } catch (error) {
        return new Response(`Error Updating ${modelName}`, { status: 500 });
    }

};
