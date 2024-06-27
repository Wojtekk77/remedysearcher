export const getRemedyAndDescriptions = db.getCollection('descriptions').aggregate([
    {
        $match: {
            description: { $ne: null },
        }
    },
    {
        $lookup: {
            from: 'remedies',
            localField: 'remedyName',
            foreignField: 'name',
            as: 'remedyObj',
        }
    },
    {
	$unwind: { path: '$remedyObj', preserveNullAndEmptyArrays: true },
    },
    {
        $match: {
            'remedyObj.name': { $exists: false }
        }
    },
    {
        $count: '1'
    },
])

// update description.remedyName to be the same as remedy.name from remedies
export const updateDescRemedyName = db.getCollection('descriptions').aggregate([
    {
        $match: {
            description: { $ne: null },
        }
    },
    {
        $lookup: {
            from: 'remedies',
            localField: 'remedyName',
            foreignField: 'name',
            as: 'remedyObj',
        }
    },
    {
	$unwind: { path: '$remedyObj', preserveNullAndEmptyArrays: true },
    },
    {
        $match: {
            'remedyObj.name': { $exists: false }
        }
    },
])
    .forEach(function(item) {
    var remedy = db.getCollection('remedies').findOne({ _id: item.remedy });
    print(item.remedyName,': -> ', remedy.name)
    db.getCollection('descriptions').updateOne({ _id: item._id }, { $set: { remedyName: remedy.name } });
})