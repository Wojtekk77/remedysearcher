import RepertorySymptom from '@models/repertorySymptom'
import { createNameWords } from '../repertorySymptom/helpers';

const BATCH_SIZE = 100;

export const splitRepertorySymptomsName = async ({ property }) => {

    while (true) {
        const repertorySymptoms = await RepertorySymptom.find({ property: { $lte: 11 }, sanitizedName: { $exists: false } }).limit(BATCH_SIZE);
        console.log(repertorySymptoms.length)
        if (!repertorySymptoms.length) break;
    
        const bulkOps = repertorySymptoms.map(repertorySymptom => ({
            updateOne: {
                filter: { _id: repertorySymptom._id },
                update: { $set: { ...createNameWords(repertorySymptom.name) } }
            }
        }));
    
        await RepertorySymptom.bulkWrite(bulkOps);
    }

}