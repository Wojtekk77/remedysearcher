import mongoose from 'mongoose';
import RepertorySymptom from '@models/repertorySymptom';
import RepertorySymptomItem from '@models/repertorySymptomItem';

// TO UPDATE EXISTING INSTANCE
export const cobineRepSymotoms = async ({ parent, children }) => {

    const parentId = new mongoose.Types.ObjectId(parent);
    const childrenIds = children?.map(rs => new mongoose.Types.ObjectId(rs));
    
    const repertorySymptomItemsToMove = await RepertorySymptomItem.updateMany({ repertorySymptom: { $in: childrenIds } }, { $set: { repertorySymptom: parentId } });
    
    await RepertorySymptom.deleteOne({ _id: { $in: childrenIds } });
};

