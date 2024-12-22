import RepertorySymptom from '@models/repertorySymptom';

export const takeRemediesShortnamesFromNameToRSItem = async ({ property }) => {


    const repertorySymptoms = await RepertorySymptom.aggregate([
        {
            $match: {
                property,
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
            $unwind: { path: '$repertorySymptomItems', preserveNullAndEmptyArrays: true },
        }
    ]);

    // for (let repertroySymptom of repertorySymptoms) {
        
    //     const wordsInName = repertroySymptom.name
    //         .toLowerCase()
    //         .replace(/[.,:;!?]/g, ' ') // Remove special characters
    //         .split(/\s+/) // Split by whitespace
    //         .map(word => word.trim()); // Sanitize and split words
    
        
    
    //     return item.name.length > 1 && wordCount
    // }

            




};

// db.getCollection('repertorysymptomitems').aggregate([
//     {
//         $match: {
//             shortName: { $ne: null },
//         },
//     },
//     {
//         $lookup: {
//             from: 'remedies',
//             localField: 'shortName',
//             foreignField: 'shortName',
//             as: 'remedy'
//         }
//     },
//     { 
//         $unwind: { path: '$remedy', preserveNullAndEmptyArrays: true },
//     },
//     {
//         $match: {
//             remedy: null
//         }
//     }
// ])