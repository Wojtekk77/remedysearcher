/* 1 */
[
    {
        "_id" : "candida albicans"
    },
    {
        "_id" : "chimaphilla umbellata"
    },
    {
        "_id" : "equisetum"
    },
    {
        "_id" : "hepar sulfuris"
    },
    {
        "_id" : "iris"
    },
    {
        "_id" : "iris versicolor"
    },
    {
        "_id" : "jalapa"
    },
    {
        "_id" : "lobelia"
    },
    {
        "_id" : "mercurius vivus i mercurius solubilis"
    },
    {
        "_id" : "natrum muriaticum"
    },
    {
        "_id" : "oscillococcinum"
    },
    {
        "_id" : "passiflora"
    },
    {
        "_id" : "pilocarpinum"
    },
    {
        "_id" : "sabal serrulata"
    },
    {
        "_id" : "sambucus"
    },
    {
        "_id" : "sulfur"
    },
    {
        "_id" : "tellurium"
    }
]

db.getCollection('remedies').aggregate([
    {
        $lookup: {
            from: 'descriptions',
            localField: '_id',
            foreignField: 'remedy',
            as: 'descriptions',
        }
    },
    {
        $lookup: {
            from: 'symptoms',
            localField: '_id',
            foreignField: 'remedy',
            as: 'symptoms',
        }
    },
    {
        $match: {
//             $or: [
//                 { 'descriptions.0': { $exists: false } },
//                 { 'symptoms.0': { $exists: true } },
//             ]
                'descriptions.0': { $exists: false },
                'symptoms.0': { $exists: true }
        }
    },
    {
        $group: {
                _id: '$name',
        }
    },
    {
        $sort: { _id: 1 }
    }
]).toArray()