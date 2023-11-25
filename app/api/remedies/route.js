import Description from '@models/description';
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { mind, general, specyfic, positiveModalities, negativeModalities } = await request.json();

    try {
        await connectToDB();
        const descriptions = await Description.find({}, { remedyName: 1 }).limit(7);
        console.log(descriptions, 'descriptions')
        return new Response(JSON.stringify({ remedies: descriptions }), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}