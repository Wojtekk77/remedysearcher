import mongoose from 'mongoose';
import RepertorySymptom from '@models/repertorySymptom';

// TO UPDATE EXISTING INSTANCE
export const updateParency = async ({ parent, children }) => {

    await RepertorySymptom.updateMany({ _id: { $in: children?.map(rs => new mongoose.Types.ObjectId(rs)) } }, { $set: { parent: new mongoose.Types.ObjectId(parent) } });
    await RepertorySymptom.updateOne({ _id: new mongoose.Types.ObjectId(parent) }, { $set: { isParent: true } });

};

