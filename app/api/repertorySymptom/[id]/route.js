import mongoose from 'mongoose';
import { connectToDB } from "@utils/database";
import { updateParency } from '../updateParency';
import { repertorySymptomNameUpdate } from '../helpers';
import { combineRepSymotoms } from '../combineRepSymotoms';
import RepertorySymptom from '@models/repertorySymptom';
import { valueExists } from '@utils';

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const comment = await Comment.findById(params.id).populate("creator")
        if (!comment) return new Response("Comment Not Found", { status: 404 });

        return new Response(JSON.stringify(comment), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}


export const repertorySymptomUpdate = async ({ values, _id }) => {
    const { name, ...otherValues } = values;
    if (_id) {

        if (valueExists(name)) {
            await repertorySymptomNameUpdate({ ...values, _id });
        }
        
        if ( Object.keys(otherValues).length) {
            await RepertorySymptom.updateOne({ _id: new mongoose.Types.ObjectId(_id) }, { $set: { ...otherValues } });
        }
    }

    return RepertorySymptom.findById(new mongoose.Types.ObjectId(_id));

};

// TO UPDATE EXISTING INSTANCE
export const PATCH = async (request) => {

    const { values, _id } = await request.json();
    try {

        const updatedRepertorySymptom = await repertorySymptomUpdate({ values, _id })

        return new Response(JSON.stringify({ repertorySymptom: updatedRepertorySymptom }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the comment by ID and remove it
        await Comment.findByIdAndRemove(params.id);

        return new Response("Comment deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting comment", { status: 500 });
    }
};
