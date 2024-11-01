import mongoose from 'mongoose';
import RepertorySymptom from '@models/repertorySymptom';
import RepertorySymptomItem from '@models/repertorySymptomItem';

// TO UPDATE EXISTING INSTANCE
export const combineRepSymotoms = async ({ parent, children }) => {

    const parentId = new mongoose.Types.ObjectId(parent);
    const childrenIds = children?.map(rs => new mongoose.Types.ObjectId(rs));
    
    const repertorySymptomItemsToMove = await RepertorySymptomItem.updateMany({ repertorySymptom: { $in: childrenIds } }, { $set: { repertorySymptom: parentId } });
    
    await RepertorySymptom.deleteMany({ _id: { $in: childrenIds } });
};

