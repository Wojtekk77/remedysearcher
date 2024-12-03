import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import { updateParency } from './updateParency';
import { combineRepSymotoms } from './combineRepSymotoms';
import { getSearchProps } from "../remedies/helpers";

export const GET = async (request) => {

    try {

        await connectToDB()
        const { searchParams } = new URL(request.url); // Extract query parameters
        const _property = parseInt(searchParams.get('_property')) || { $gte: 1 }; // Default page to 1
        const _text = parseInt(searchParams.get('_property')) || { $gte: 1 };

        // const [searchWordsArray] = getSearchProps({ mind: _text });


        const repertorySymptomsRaw = await RepertorySymptom.aggregate([
            {
                $match: {
                    property: _property,
                    name: {}
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
        // console.log(repertorySymptoms[0])
        // console.log(repertorySymptoms[1])
        // return new Response(JSON.stringify({ imagesWithJSON: [{img1: '11 1'}, { img2: '2 12'}] }), { status: 200 })
        return new Response(JSON.stringify({ repertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

// TO CREATE NEW INSTANCE
export const POST = async (request) => {

    const { values, modelName } = await request.json();
    let { imagePath, orderNumber, ...otherValues } = values;

    try {
        await connectToDB()

        let lastImageRepSymptomOrderNumber; 
        if (!orderNumber) {
            lastImageRepSymptomOrderNumber = await RepertorySymptom.find({ imagePath }).sort({ orderNumber: -1 }).limit(1);
            orderNumber = lastImageRepSymptomOrderNumber[0].orderNumber + 1
        }
        await RepertorySymptom.create({ ...otherValues, imagePath, orderNumber });

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
            await combineRepSymotoms({ ...values })
        }
        else if (parent && children?.length) {
            await updateParency({ ...values })
        }

        return new Response(JSON.stringify({}), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
