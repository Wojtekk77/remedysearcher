import { connectToDB } from "@utils/database";
import DescriptionMamk from '@models/descriptionMamk';
import mongoose from 'mongoose';

export const POST = async (request) => {
    const jsonRequest = await request.json();
    const { mind } = jsonRequest;
    try {

        return new Response(JSON.stringify({ remedy: {} }), { status: 200 })
    } catch (error) {
        return new Response("Failed to get remedies", { status: 500 });
    }
}



export const GET = async (request) => {
    const url = new URL(request.url);
    const descriptionMamkId = url.pathname.split("/").pop();

    try {
        await connectToDB()
        console.log('rem')
        const remedy = await DescriptionMamk.findOne({ _id: new mongoose.Types.ObjectId(descriptionMamkId) }).sort({ remedyName: 1 })
        const descHtml = remedy.descriptionHtml?.toString();
        return new Response(JSON.stringify({ remedy: { ...remedy, descriptionHtml: descHtml } }), { status: 200 })
    } catch (error) {
        return new Response(`Remedy error: ${error}`, { status: 500 })
    }
} 