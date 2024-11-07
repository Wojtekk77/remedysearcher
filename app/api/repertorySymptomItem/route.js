import Description from '@models/description';
import { connectToDB } from "@utils/database";
import Statistics from '@models/statistics';
import mongoose from 'mongoose';
import Illness from '@models/illness';
import RepertorySymptomItem from '@models/repertorySymptomItem';
import Remedy from '@models/remedy';

export const POST = async (request) => {
    const { values } = await request.json();

try {
    await connectToDB();

    const shortName = values.shortName?.toLowerCase();

    let remedy;
    if (shortName) {
        remedy = await Remedy.find({ $or: [{ shortName }, { otherNames: shortName }] })
    }

    await RepertorySymptomItem.create({ ...values, shortName: remedy?.shortName || shortName || '', remedy: remedy?._id });

    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to get ilnesses", { status: 500 });
    }
}

// export const GET = async (request) => {
//     const startTime = new Date(); 
    
//     try {
//         await connectToDB()

//         const ilnesses = await Illness.find({}).sort({ name: 1 });
//         const endTime = new Date(); 
//         console.log(`${endTime.getTime() - startTime.getTime()}ms: Total Time`);

//         return new Response(JSON.stringify(ilnesses), { status: 200 })
//     } catch (error) {
//         return new Response("Failed to fetch ilnesses", { status: 500 })
//     }
// } 
