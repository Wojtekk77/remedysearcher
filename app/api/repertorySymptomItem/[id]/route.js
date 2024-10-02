import Comment from "@models/comment";
import Symptom from '@models/symptom';
import mongoose from 'mongoose';
import { connectToDB } from "@utils/database";
import Illness from '@models/illness';
import RepertorySymptomItem from '@models/repertorySymptomItem';
import Remedy from '@models/remedy';

export const POST = async (request) => {

    const startTime = new Date(); 

    const jsonRequest = await request.json();
    const { id, values } = jsonRequest;
    const { strength } = values;

    try {
        await connectToDB();

        await RepertorySymptomItem.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { strength }});
        const repertorySymptomItem = await RepertorySymptomItem.findById({ _id: new mongoose.Types.ObjectId(id) });

        return new Response(JSON.stringify({ repertorySymptomItem }), { status: 200 })

    } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 });
    }
}

export const PATCH = async (request) => {

    const startTime = new Date(); 

    const jsonRequest = await request.json();
    const { _id, values } = jsonRequest;

    try {
        await connectToDB()

        let shortName = values.shortName?.toLowerCase();

        let remedy;
        if (shortName) {
            remedy = await Remedy.findOne({ $or: [{ shortName }, { otherNames: shortName }] })
            shortName = remedy?.shortName ? remedy?.shortName : shortName;
        }
        
        await RepertorySymptomItem.updateOne({ _id: new mongoose.Types.ObjectId(_id) }, { $set: { ...values, shortName: shortName || 'Name', remedy: remedy?._id } });
        const repertorySymptomItem = await RepertorySymptomItem.findById({ _id: new mongoose.Types.ObjectId(_id) });
        return new Response(JSON.stringify({ repertorySymptomItem }), { status: 200 })

    } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 });
    }
}
