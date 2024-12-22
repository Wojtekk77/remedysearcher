import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import { REMEDY_PROPERTY } from '@common/constants';

export const GET = async (request) => {

    try {

        await connectToDB()
        const { searchParams } = new URL(request.url); // Extract query parameters

        let repertorySymptoms = await RepertorySymptom.aggregate([
            {
                $match: {
                    property: { $lte: REMEDY_PROPERTY.UMYSL },
                },
            },
            {
                $sort: {
                    name: 1,
                },
            },
        ]);
        repertorySymptoms = repertorySymptoms.filter(item => item.name.length > 1)

        return new Response(JSON.stringify({ repertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};
