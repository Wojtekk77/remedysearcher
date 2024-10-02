
import Statistics from '@models/statistics';
import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';

export const GET = async (request, { params }) => {

    try {
        await connectToDB()


        const repertorySymptoms = await RepertorySymptom.aggregate([
            {
                $lookup: {
                    from: 'repertorysymptomitems',
                    localField: '_id',
                    foreignField: 'repertorySymptom',
                    as: 'repertorySymptomItems'
                }
            },
            // {
            //     $limit: 5,
            // }
        ]);

        return new Response(JSON.stringify({ repertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const POST = async (request) => {

    // mainPart: (umysl, zawrotyGlowy, glowa, oko, wzrok, ucho, sluch... s.9 repertorium)
    const { mainPart } = await request.json();

    try {
        await connectToDB()
        let today = new Date();        
        today.setDate(today.getDate() - 60);

        const statistics = await Statistics.aggregate([
            {
                $match: {
                    createdAt: { $gt: today }
                },
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" }
                    },
                    count: { $sum: 1 },
                    results: { $push: "$results" },
                    // documents: { $push: "$$ROOT" } // Optional: If you want to include the full documents in the result
                    queries: { $push: '$query' },
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 }
            }
        ]);

        return new Response(JSON.stringify({ statistics }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

