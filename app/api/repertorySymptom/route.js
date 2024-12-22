import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import { updateParency } from './updateParency';
import { combineRepSymotoms } from './combineRepSymotoms';
import { REMEDY_PROPERTY } from '@common/constants';
import { repertorySymptomCreate, repertorySymptomNameUpdate } from './helpers';

export const GET = async (request) => {

    try {

        await connectToDB()
        const { searchParams } = new URL(request.url); // Extract query parameters
        const _property = parseInt(searchParams.get('_property')) || { $gte: REMEDY_PROPERTY.UMYSL }; // all, without sides (left - right etc.)

        let repertorySymptoms = await RepertorySymptom.aggregate([
            {
                $match: {
                    property: _property,
                    parent: null,
                    // name: {  }
                },
            },
            {
                $sort: {
                    property: 1,
                    name: 1,
                },
            },
            {
                $limit: 200
            },
        ]);
        console.log(repertorySymptoms)
        repertorySymptoms = repertorySymptoms.filter(item => item.name.length > 1)
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

    const { values } = await request.json();
    // let { imagePath, orderNumber, ...otherValues } = values;

    try {
        await connectToDB()

        await repertorySymptomCreate({ values })
        
        return new Response(JSON.stringify({}), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}


// TO UPDATE EXISTING INSTANCE
export const PATCH = async (request) => {

    const { values } = await request.json();
    const { parent, children, cobineSymptoms, name, _id } = values;
    try {

        if (parent && children?.length && cobineSymptoms) {
            await combineRepSymotoms({ ...values })
        }
        else if (parent && children?.length) {
            await updateParency({ ...values })
        }
        else if (_id && name) {
            await repertorySymptomNameUpdate({ ...values })
        }

        return new Response(JSON.stringify({}), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
