import { connectToDB } from "@utils/database";
import { getArrayOfRemedySympt } from './getArrayOfRemedySymptom';

export const GET = async (request, { params }) => {

    try {
        await connectToDB()

        const repertoryImageJSONs = await getArrayOfRemedySympt();
        return new Response(JSON.stringify({ repertoryImageJSONs }), { status: 200 })


    } catch (error) {
        console.log('error:', error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
