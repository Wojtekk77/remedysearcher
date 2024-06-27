import Comment from "@models/comment";
import Symptom from '@models/symptom';
import mongoose from 'mongoose';
import { connectToDB } from "@utils/database";
import Illness from '@models/illness';

export const GET = async (request, { params }) => {
    const startTime = new Date(); 
    
    try {
        await connectToDB()
        const remedyWithSymptoms = await Symptom.aggregate([
            {
                $match: { illness: new mongoose.Types.ObjectId(params.id) },
            },
            {
                $lookup: {
                    from: 'remedies',
                    localField: 'remedy',
                    foreignField: '_id',
                    as: 'remedyObj',
                }
            },
            { 
                $unwind: { path: '$remedyObj', preserveNullAndEmptyArrays: true },
            },
            {
                $group: {
                    _id: '$remedy',
                    mainSymptoms: {
                        $push: {
                            $cond:[
                                { $eq: ['$isMainSymptom', true] },
                                { _id: '$_id', description: '$description', descriptionAI: '$descriptionAI', order: '$order', isMainSymptom: '$isMainSymptom' },
                                '$$REMOVE' // not push null or undefined to the list
                            ]
                        },
                    },
                    confirmSymptoms: {
                        $push: {
                            $cond:[
                                { $ne: ['$isMainSymptom', true] },
                                { _id: '$_id', description: '$description', descriptionAI: '$descriptionAI', order: '$order', isMainSymptom: '$isMainSymptom' },
                                '$$REMOVE' // not push null or undefined to the list
                            ]
                        },
                    },
                    remedy: { $max: '$remedyObj' },
                }
            },
            {
                $sort: { 'remedy.name': 1 }
            },
        ]);
        const illness = await Illness.findById(params.id);

        const endTime = new Date(); 
        console.log(`${endTime.getTime() - startTime.getTime()}ms: Total Time`);
        if (!remedyWithSymptoms.length) return new Response("Symptoms Not Found", { status: 404 });

        return new Response(JSON.stringify({ remedyWithSymptoms, illness }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
