import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import RepertoryImageJSON from '@models/repertoryImageJSON';
import { REMEDY_PROPERTY } from '@common/constants';

export const GET = async (request) => {

    const { searchParams } = new URL(request.url); // Extract query parameters
    const _limit = parseInt(searchParams.get('_limit')) || 5; // Default limit to 5
    const _page = parseInt(searchParams.get('_page')) || 1; // Default page to 1
    console.log(_limit, _page)
    const startTimewordsFamilies = new Date(); 

    try {
        await connectToDB()
        // const repImages = await RepertoryImageJSON.find({ imageAlreadyConverted: true }).limit(3)
        let repImages = await RepertoryImageJSON.find({ imageAlreadyConverted: true, property: REMEDY_PROPERTY.ZAWROTY_GLOWY })
        const imagesTotal = repImages.length;
        console.log(imagesTotal, '<-imagesTotal');
        // console.log((_page - 1) * _limit, _limit * _page, '<-(_limit - 1) * _page, _limit * _page')
        repImages = repImages.slice((_page - 1) * _limit, _limit * _page)
        
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
                $lookup: {
                    from: 'repertorysymptoms',
                    let: { parentId: { $toObjectId: '$parent' } },
                    pipeline: [
                        { $match: { $expr: { $eq: ['$_id', '$$parentId'] } } }
                    ],
                    as: 'parentObj'
                }
            },
            {
                $unwind: { path: '$parentObj', preserveNullAndEmptyArrays: true },
            },
            {
                $sort: {
                    imagePath: 1, orderNumber: 1,
                },
            },

        ]);


        const repertorySymptomsRaw2 = repertorySymptomsRaw.reduce((acc, item) => {
            if (!acc[item.imagePath]) {
                acc[item.imagePath] = [];
            }
            console.log(item?.name, item?.parentObj, 'item');
            const sorted = item.repertorySymptomItems.sort((a, b) => a.shortName.localeCompare(b.shortName));
            acc[item.imagePath].push({ ...item, repertorySymptomItems: sorted })
            return acc;
        }, {})

        const repertorySymptoms = Object.entries(repertorySymptomsRaw2).map(([imagePath, array]) => ({ imagePath, repertorySymptoms: array, property: array[0]?.property }))
    
        const endTimeWordsFamilies = new Date();     
        console.log(`${endTimeWordsFamilies.getTime() - startTimewordsFamilies.getTime()}ms Description.aggregate`);

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("imagesTotal", imagesTotal);
        return new Response(JSON.stringify({ repertorySymptoms }), { status: 200, headers })

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

