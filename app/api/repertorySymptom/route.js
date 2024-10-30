import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import { updateParency } from './updateParency';
import { cobineRepSymotoms } from './cobineRepSymotoms';

// export const GET = async (request, { params }) => {

//     try {
//         await connectToDB()
//         // ęę TUTAJ TRZEBA WYCIĄGNĄĆ PO IMAGEJSON -> A POTEM REP SYMPTOM ITD
//         const repImages = await RepertoryImageJSON.find({ imageAlreadyConverted: true }).limit(3)
//         const repImagesPaths = repImages.map(ri => ri.imagePath) 
//         // console.log(repImagesPaths, 'repImagesPaths');
//         const repertorySymptomsRaw = await RepertorySymptom.aggregate([
//             {
//                 $match: {
//                     imagePath: { $in: repImagesPaths }
//                 },
//             },
//             {
//                 $lookup: {
//                     from: 'repertorysymptomitems',
//                     localField: '_id',
//                     foreignField: 'repertorySymptom',
//                     as: 'repertorySymptomItems'
//                 }
//             },
//             {
//                 $sort: {
//                     imagePath: 1,
//                 },
//             },

//         ]);
//         const repertorySymptomsRaw2 = repertorySymptomsRaw.reduce((acc, item) => {
//             if (!acc[item.imagePath]) {
//                 acc[item.imagePath] = [];
//             }
//             acc[item.imagePath].push(item)
//             return acc;
//         }, {})

//         const repertorySymptoms = Object.entries(repertorySymptomsRaw2).map(([imagePath, array]) => ({ imagePath, repertorySymptoms: array, property: array[0]?.property }))
//         // console.log(repertorySymptoms[0])
//         // console.log(repertorySymptoms[1])
//         // return new Response(JSON.stringify({ imagesWithJSON: [{img1: '11 1'}, { img2: '2 12'}] }), { status: 200 })
//         return new Response(JSON.stringify({ repertorySymptoms }), { status: 200 })

//     } catch (error) {
//         return new Response("Internal Server Error", { status: 500 });
//     }
// }

// TO CREATE NEW INSTANCE
export const POST = async (request) => {

    const { values, modelName } = await request.json();
    const { imagePath } = values;

    try {
        await connectToDB()

        await RepertorySymptom.create({ ...values, imagePath });

        return new Response(JSON.stringify({}), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}


// TO UPDATE EXISTING INSTANCE
export const PATCH = async (request) => {

    const { values } = await request.json();
    const { parent, children, cobineSymptoms } = values;
    try {

        if (parent && children?.length && cobineSymptoms) {
            await cobineRepSymotoms({ ...values })
        }
        else if (parent && children?.length) {
            await updateParency({ ...values })
        }

        return new Response(JSON.stringify({}), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
