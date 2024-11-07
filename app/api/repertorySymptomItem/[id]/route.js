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
        let repertorySymptomItem = {};
        if (values.shortName?.includes(',')) {
            repertorySymptomItem = await addNewRepSymptomItems(values.shortName, _id);
        }
        else {
            repertorySymptomItem = await updateOneSymptom(_id, values);
        }

        return new Response(JSON.stringify({ repertorySymptomItem }), { status: 200 })

    } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 });
    }
}

export const DELETE = async (request) => {
    const { values } = await request.json();

try {
    await connectToDB();

    console.log(values, 'values')
    const x = await RepertorySymptomItem.deleteOne({ _id: new mongoose.Types.ObjectId(values._id) });
    console.log(x);
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to get ilnesses", { status: 500 });
    }
}

const addNewRepSymptomItems = async (repSymptomItemsAsStr, _id) => {

    const arrOfRepSymptItems = repSymptomItemsAsStr.split(',');
    const firstShortName = arrOfRepSymptItems.shift();
    const repertorySymptomItem = await updateOneSymptom(_id, { shortName: firstShortName })

    console.log(arrOfRepSymptItems, 'arrOfRepSymptItems')
    for (const shortNameRaw of arrOfRepSymptItems) {

        let shortName = shortNameRaw.trim().toLowerCase();
        const remedy = await Remedy.findOne({ $or: [{ shortName }, { otherNames: shortName }] })
        shortName = remedy?.shortName ? remedy?.shortName : shortName;

        await RepertorySymptomItem.create({ repertorySymptom: repertorySymptomItem.repertorySymptom, shortName, remedy: remedy?._id, strength: 1 } );
    } 

    return repertorySymptomItem;
}

const updateOneSymptom = async (_id, values) => {

    let shortName = values.shortName?.toLowerCase();

    let remedy;
    if (shortName) {
        remedy = await Remedy.findOne({ $or: [{ shortName }, { otherNames: shortName }] })
        shortName = remedy?.shortName ? remedy?.shortName : shortName;
        values.shortName = shortName;
    }
    
    await RepertorySymptomItem.updateOne({ _id: new mongoose.Types.ObjectId(_id) }, { $set: { ...values, remedy: remedy?._id } });
    return RepertorySymptomItem.findById({ _id: new mongoose.Types.ObjectId(_id) });
};
