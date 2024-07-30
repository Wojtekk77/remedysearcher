import Comment from "@models/comment";
import Symptom from '@models/symptom';
import mongoose from 'mongoose';
import { connectToDB } from "@utils/database";
import Illness from '@models/illness';
import RepertorySymptomItem from '@models/repertorySymptomItem';

export const POST = async (request) => {

    const startTime = new Date(); 

    const jsonRequest = await request.json();
    const { id, values } = jsonRequest;
    const { strength } = values;
    console.log(id, strength, 'id, strength');
    try {
        await connectToDB()

        await RepertorySymptomItem.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { strength }});
        const repertorySymptomItem = await RepertorySymptomItem.findById({ _id: new mongoose.Types.ObjectId(id) });

        return new Response(JSON.stringify({ repertorySymptomItem }), { status: 200 })

    } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 });
    }
}
