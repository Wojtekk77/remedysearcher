import { connectToDB } from "@utils/database";
import mongoose from 'mongoose';
import DescriptionCommonWords from '@models/descriptionCommonWords';

export const POST = async (request) => {
    const jsonRequest = await request.json();
    console.log(jsonRequest, 'jsonRequest');
    const { id, isUseful } = jsonRequest;
    const startTime = new Date(); 

try {
    await connectToDB();
    // await DescriptionCommonWords.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { useful: isUseful } });
    const descCommWord = await DescriptionCommonWords.findById(new mongoose.Types.ObjectId(id));
    await DescriptionCommonWords.updateMany({ polishWordArray: descCommWord.polishWordArray }, { $set: { useful: isUseful } });
    // ęę dodaj jeszcze logike, ze jak słowo wywalicz w jednym remedium to we wszystkich innych również
    let endTime = new Date(); 
    // console.log(`${endTime.getTime() - startTime.getTime()}ms: Total Time`);
    // res.json({ useful });
    return new Response(JSON.stringify({ status: 'success' }), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}