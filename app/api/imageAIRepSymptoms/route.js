import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import RepertoryImageJSON from '@models/repertoryImageJSON';

export const GET = async (request, { params }) => {

    try {
        await connectToDB()
        // const repImages = await RepertoryImageJSON.find({ imageAlreadyConverted: true }).limit(3)
        const repImages = await RepertoryImageJSON.find({ imageAlreadyConverted: false }) //.limit(1)
        
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
            const sorted = item.repertorySymptomItems.sort((a, b) => a.shortName.localeCompare(b.shortName));
            acc[item.imagePath].push({ ...item, repertorySymptomItems: sorted })
            return acc;
        }, {})

        const repertorySymptoms = Object.entries(repertorySymptomsRaw2).map(([imagePath, array]) => ({ imagePath, repertorySymptoms: array, property: array[0]?.property }))
        return new Response(JSON.stringify({ repertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 });
    }
}
