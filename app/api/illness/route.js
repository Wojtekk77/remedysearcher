import Description from '@models/description';
import { connectToDB } from "@utils/database";
import Statistics from '@models/statistics';
import mongoose from 'mongoose';
import { getDescProperties, getModalities, getSearchProps, getWordsFamiliesWithSentences, highlightText } from './helpers';
import Illness from '@models/illness';

export const POST = async (request) => {
    const jsonRequest = await request.json();
    const { mind, general, specyfic, positiveModalities, negativeModalities, userId } = jsonRequest;
    const startTime = new Date(); 

try {
    await connectToDB();

   const endTime = new Date(); 

    return new Response(JSON.stringify({
        ilnesses: ilnesses || [],
    }), { status: 200 })
    } catch (error) {
        return new Response("Failed to get ilnesses", { status: 500 });
    }
}

export const GET = async (request) => {
    const startTime = new Date(); 
    
    try {
        await connectToDB()

        const ilnesses = await Illness.find({}).sort({ name: 1 });
        const endTime = new Date(); 
        console.log(`${endTime.getTime() - startTime.getTime()}ms: Total Time`);

        return new Response(JSON.stringify(ilnesses), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch ilnesses", { status: 500 })
    }
} 