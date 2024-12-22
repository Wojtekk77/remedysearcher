import mongoose from 'mongoose';
import RepertorySymptom from '@models/repertorySymptom';
import { connectToDB } from "@utils/database";

export const POST = async (request) => {

    const { values } = await request.json();
    // _id: '6724cc58ddb23a4cebbcf797',
    // name: 'ZŁUDZENIA, wyobrażenia, halucynacje, urojenia',
    // joinParency: '',
    // isParent: true,
    // depth: 5,
    // property: 8
    console.log(values, 'values')
    try {
        await connectToDB()

        // Fetch the expanded symptoms from the database
        let expandedSymptoms = await RepertorySymptom.find({
            parent: new mongoose.Types.ObjectId(values._id)
        }).select('_id name isParent property parent');

        // Add the `depth` field to each symptom
        expandedSymptoms = expandedSymptoms.map(rs => ({
            _id: rs._id,
            name: rs.name,
            isParent: rs.isParent,
            parent: rs.parent,
            property: rs.property,
            depth: values.depth - 1
        }));

        console.log(expandedSymptoms, 'expandedSymptoms')
        console.log('expandRepertorySymptom')
        // return new Response(JSON.stringify({ imagesWithJSON: [{img1: '11 1'}, { img2: '2 12'}] }), { status: 200 })
        return new Response(JSON.stringify({ expandedSymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};
