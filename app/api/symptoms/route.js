import Description from '@models/description';
import { connectToDB } from "@utils/database";
import Statistics from '@models/statistics';
import mongoose from 'mongoose';
import Illness from '@models/illness';
import Symptom from '@models/symptom';

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


export const PATCH = async (request, { params }) => {

    const data = await request.json();
    const { value, _id, fieldToUpdate } = data;

    if (!value) {
        console.log('no value set')
        return new Response("No value set", { status: 500 })
    }

    try {
        await connectToDB();

        // // Find the existing comment by ID
        const existingSymptom = await Symptom.findById(_id);
        
        if (!existingSymptom) {
            return new Response("Symptom not found", { status: 404 });
        }
        console.log(existingSymptom, 'existingSymptom 1')

        // Update the comment with new data
        existingSymptom[fieldToUpdate] = value;
        console.log(existingSymptom, 'existingSymptom 2')
        
        await existingSymptom.save();
        console.log(data, 'data')
        return new Response("Successfully updated the Comments", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Comment", { status: 500 });
    }
};

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