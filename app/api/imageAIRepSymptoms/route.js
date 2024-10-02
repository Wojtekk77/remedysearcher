import { connectToDB } from "@utils/database";
import { getFilesFromCatalog } from '../scripts/helpers';
import { jsonLeftRight } from '../scripts/AICreated/jsonLeftRight';
import RepertorySymptom from '@models/repertorySymptom';
import RepertoryImageJSON from '@models/repertoryImageJSON';

export const GET = async (request, { params }) => {

    try {
        await connectToDB()
        // const repImages = await RepertoryImageJSON.find({ imageAlreadyConverted: true }).limit(3)
        const repImages = await RepertoryImageJSON.find({ imageAlreadyConverted: false }) // .limit(3)
        
        const repImagesPaths = repImages.map(ri => ri.imagePath) 
        
        const repertorySymptomsRaw = await RepertorySymptom.aggregate([
            {
                $match: {
                    imagePath: { $in: repImagesPaths }
                },
            },
            {
                $lookup: {
                    from: 'repertorysymptomitems',
                    localField: '_id',
                    foreignField: 'repertorySymptom',
                    as: 'repertorySymptomItems'
                }
            },
            {
                $sort: {
                    imagePath: 1,
                },
            },

        ]);


        const repertorySymptomsRaw2 = repertorySymptomsRaw.reduce((acc, item) => {
            if (!acc[item.imagePath]) {
                acc[item.imagePath] = [];
            }
            acc[item.imagePath].push(item)
            return acc;
        }, {})

        const repertorySymptoms = Object.entries(repertorySymptomsRaw2).map(([imagePath, array]) => ({ imagePath, repertorySymptoms: array, property: array[0]?.property }))
        return new Response(JSON.stringify({ repertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const POST = async (request) => {

    const { mainPart } = await request.json();

    try {
        await connectToDB()

        return new Response(JSON.stringify({ statistics }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

