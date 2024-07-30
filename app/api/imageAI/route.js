import Comment from "@models/comment";
import Statistics from '@models/statistics';
import { connectToDB } from "@utils/database";
import { getFilesFromCatalog } from '../scripts/helpers';
import { jsonLeftRight } from '../scripts/AICreated/jsonLeftRight';
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

        // return new Response(JSON.stringify({ imagesWithJSON: [{img1: '11 1'}, { img2: '2 12'}] }), { status: 200 })
        return new Response(JSON.stringify({ repertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const POST = async (request) => {

    const { comment, tag } = await request.json();

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

