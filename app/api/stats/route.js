import Comment from "@models/comment";
import Statistics from '@models/statistics';
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {

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


