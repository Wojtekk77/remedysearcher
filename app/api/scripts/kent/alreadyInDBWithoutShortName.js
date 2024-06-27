/* 1 */
// remedia które były w bazie, ale nie były zgode nazwą z kentem
// updatuje do kentowskiej nazwy
export const alreadyInDBWithoutShortName = [
    {
        "_id" : "aceticum acidum",
        "shortNameOld" : null,
        shortName: 'Acet-ac', name: 'Acetic acid',
    },
    {
        "_id" : "actea racemosa cimicifuga racemosa",
        "shortNameOld" : null,
        shortName: 'Cimic', name: 'Cimicifuga racemosa'
    },
    {
        "_id" : "ailanthus glandulosa",
        "shortNameOld" : null,
        shortName: 'Ail', name: 'Ailanthus'
    },
    {
        "_id" : "aloe",
        "shortNameOld" : null,
        shortName: 'Aloe', name: 'Aloe socotrina'
    },
    {
        "_id" : "alumina phosphorica",
        "shortNameOld" : null,
    },
    {
        "_id" : "arsenicum sulfuratum flavum",
        "shortNameOld" : null,
        shortName: 'Ars-s-f', name: 'Arsenicum sulphuratum flavum'
    },
    {
        "_id" : "aurum sulphuricum",
        "shortNameOld" : null,
        shortName: 'Aur-s', name: 'Aurum sulphuratum'
    },
    {
        "_id" : "baptisia",
        "shortNameOld" : null,
        shortName: 'Bapt', name: 'Baptisia tinctoria'
    },
    {
        "_id" : "barium iodatum",
        "shortNameOld" : null,
        shortName: 'Bar-i', name: 'Baryta iodata'
    },
    {
        "_id" : "barium sulphuricum",
        "shortNameOld" : null,
        shortName: 'Bar-s', name: 'Barium sulphuricum'
    },
    {
        "_id" : "benzoicum acidum",
        "shortNameOld" : null,
        shortName: 'Benz-ac', name: 'Benzoic acid'
    },
    {
        "_id" : "berberis",
        "shortNameOld" : null,
        shortName: 'Berb', name: 'Berberis vulgaris'
    },
    {
        "_id" : "bryonia",
        "shortNameOld" : null,
        shortName: 'Bry', name: 'Bryonia alba'
    },
    {
        "_id" : "bufo",
        "shortNameOld" : null,
        shortName: 'Bufo', name: 'Bufo rana'
    },
    {
        "_id" : "cadmium sulphuricum",
        "shortNameOld" : null,
        shortName: 'Cadm', name: 'Cadmium sulphuratum'
    },
    {
        "_id" : "caladium",
        "shortNameOld" : null,
        shortName: 'Calad', name: 'Caladium seguinum'
    },
    {
        "_id" : "calcarea arsenicosa",
        "shortNameOld" : null,
        shortName: 'Calc-ar', name: 'Calcarea arsenica'
    },
    {
        "_id" : "calcarea fluorica",
        "shortNameOld" : null,
        shortName: 'Calc-f', name: 'Calcarea fluorata'
    },
    {
        "_id" : "calendula",
        "shortNameOld" : null,
        shortName: 'Calen', name: 'Calendula officinalis'
    },
    {
        "_id" : "camphora",
        "shortNameOld" : null,
        shortName: 'Camph', name: 'Camphora officinarum'
    },
    {
        "_id" : "caulophyllum",
        "shortNameOld" : null,
        shortName: 'Caul', name: 'Caulophyllum thalictroides'
    },
    {
        "_id" : "chelidonium",
        "shortNameOld" : null,
        shortName: 'Chel', name: 'Chelidonium majus'
    },
    {
        "_id" : "china",
        "shortNameOld" : null,
        shortName: 'Chin', name: 'China officinalis' 
    },
    {
        "_id" : "coffea",
        "shortNameOld" : null,
        shortName: 'Coff', name: 'Coffea cruda'
    },
    {
        "_id" : "colchicum",
        "shortNameOld" : null,
        shortName: 'Colch', name: 'Colchicum autumnale'
    },
    {
        "_id" : "culex musca",
        "shortNameOld" : null,
        shortName: 'Culx', name: 'Culex moscae'
    },
    {
        "_id" : "cyclamen",
        "shortNameOld" : null,
        shortName: 'Cycl', name: 'Cyclamen europaeum'
    },
    {
        "_id" : "digitalis",
        "shortNameOld" : null,
        shortName: 'Dig', name: 'Digitalis purpurea'
    },
    {
        "_id" : "euphrasia",
        "shortNameOld" : null,
        shortName: 'Euphr', name: 'Euphrasia officinalis'
    },
    {
        "_id" : "ferrum arsenicum",
        "shortNameOld" : null,
        shortName: 'Ferr-ar', name: 'Ferrum arsenicosum'
    },
    {
        "_id" : "gelsemium",
        "shortNameOld" : null,
        shortName: 'Gels', name: 'Gelsemium sempervirens'
    },
    {
        "_id" : "glonoinum",
        "shortNameOld" : null,
        shortName: 'Glon', name: 'Glonoinum'
    },
    {
        "_id" : "gratiola",
        "shortNameOld" : null,
        shortName: 'Grat', name: 'Gratiola officinalis' 
    },
    {
        "_id" : "hepar sulphur",
        "shortNameOld" : null,
        shortName: 'Hep', name: 'Hepar sulphuris calcareum'
    },
    {
        "_id" : "hyoscyamus",
        "shortNameOld" : null,
        shortName: 'Hyos', name: 'Hyoscyamus niger'
    },
    {
        "_id" : "hypericum",
        "shortNameOld" : null,
        shortName: 'Hyper', name: 'Hypericum perforatum'
    },
    {
        "_id" : "ignatia",
        "shortNameOld" : null,shortName: 'Ign', name: 'Ignatia amara'
    },
    {
        "_id" : "iodinum",
        "shortNameOld" : null,
        shortName: 'Iod', name: 'Iodium'
    },
    {
        "_id" : "kalium silicatum",
        "shortNameOld" : null,
        shortName: 'Kali-sil', name: 'Kalium silicatum' 
    },
    {
        "_id" : "kalmia latifolia",
        "shortNameOld" : null,
        shortName: 'Kalm', name: 'Kalmia latifolia'
    },
    {
        "_id" : "lac vaccinum defloratum",
        "shortNameOld" : null,
        shortName: 'Lac-d', name: 'Lac defloratum'
    },
    {
        "_id" : "lycopodium",
        "shortNameOld" : null,
        shortName: 'Lyc', name: 'Lycopodium clavatum'
    },
    {
        "_id" : "mercurius",
        "shortNameOld" : null,
        shortName: 'Merc', name: 'Mercurius vivus'
    },
    {
        "_id" : "mercurius jodatus flavus",
        "shortNameOld" : null,shortName: 'Merc-i-f', name: 'Mercurius iodatus flavus'
    },
    {
        "_id" : "naja",
        "shortNameOld" : null,shortName: 'Naja', name: 'Naja tripudia'
    },
    {
        "_id" : "natrium arsenicosum",
        "shortNameOld" : null,shortName: 'Nat-a', name: 'Natrium arsenicatum'
    },
    {
        "_id" : "natrium silicatum",
        "shortNameOld" : null,
    },
    {
        "_id" : "phytolacca",
        "shortNameOld" : null,shortName: 'Phyt', name: 'Phytolacca decandra'
    },
    {
        "_id" : "picridum acidum",
        "shortNameOld" : null,
        shortName: 'Pic-ac', name: 'Picricum acidum'
    },
    {
        "_id" : "platinum",
        "shortNameOld" : null,shortName: 'Plat', name: 'Platinum metallicum'
    },
    {
        "_id" : "podophyllum",
        "shortNameOld" : null,shortName: 'Podo', name: 'Podophyllum peltatum' 
    },
    {
        "_id" : "pulsatilla",
        "shortNameOld" : null,shortName: 'Puls', name: 'Pulsatilla nigricans'
    },
    {
        "_id" : "sanguinaria",
        "shortNameOld" : null,shortName: 'Sang', name: 'Sanguinaria canadensis'
    },
    {
        "_id" : "spigelia anthelmintica",
        "shortNameOld" : null,shortName: 'Spig', name: 'Spigelia anthelmia'
    },
    {
        "_id" : "spongia",
        "shortNameOld" : null,shortName: 'Spong', name: 'Spongia tosta' 
    },
    {
        "_id" : "squilla",
        "shortNameOld" : null,shortName: 'Squil', name: 'Squilla hispanica'
    },
    {
        "_id" : "tuberculinum bovinum",
        "shortNameOld" : null,shortName: 'Tub', name: 'Tuberculinum'
    },
    {
        "_id" : "valerianum",
        "shortNameOld" : null,
        shortName: 'Valer', name: 'Valeriana'
    },
    {
        "_id" : "vespa vulgaris",
        "shortNameOld" : null,
    },
    {
        "_id" : "wyethia",
        "shortNameOld" : null,shortName: 'Wye', name: 'Wyethia helenioides'
    },
    {
        "_id" : "zincum phosphoricum",
        "shortNameOld" : null,
    },
    {
        "_id" : "candida albicans",
        "shortNameOld" : null,
    },
    {
        "_id" : "chimaphilla umbellata",
        "shortNameOld" : null,shortName: 'Chim', name: 'Chimaphila umbellata'
    },
    {
        "_id" : "equisetum",
        "shortNameOld" : null,shortName: 'Equis', name: 'Equisetum hyemale'
    },
    {
        "_id" : "hepar sulfuris",
        "shortNameOld" : null,
        shortName: 'Hep', name: 'Hepar sulphuris calcareum',
        updateID: true,
    },
    {
        "_id" : "iris",
        "shortNameOld" : null,
        shortName: 'Iris', name: 'Iris versicolor',
        updateID: true,
    },
    {
        "_id" : "lobelia",
        "shortNameOld" : null,
        shortName: 'Lob', name: 'Lobelia inflata'
    },
    {
        "_id" : "mercurius vivus i mercurius solubilis",
        "shortNameOld" : null,
        shortName: 'Merc', name: 'Mercurius vivus',
        updateID: true,
    },
    {
        "_id" : "natrum muriaticum",
        "shortNameOld" : null,
        shortName: 'Nat-m', name: 'Natrium muriaticum',
    },
    {
        "_id" : "oscillococcinum",
        "shortNameOld" : null,
    },
    {
        "_id" : "passiflora",
        "shortNameOld" : null,
    },
    {
        "_id" : "pilocarpinum",
        "shortNameOld" : null,
    },
    {
        "_id" : "sambucus",
        "shortNameOld" : null,
        shortName: 'Samb', name: 'Sambucus nigra'
    },
    {
        "_id" : "sulfur",
        "shortNameOld" : null,
        shortName: 'Sulph', name: 'Sulphur',
    }
]


// db.getCollection('remedies').aggregate([
//     {
//         $lookup: {
//             from: 'descriptions',
//             localField: '_id',
//             foreignField: 'remedy',
//             as: 'descriptions',
//         }
//     },
//     {
//         $lookup: {
//             from: 'symptoms',
//             localField: '_id',
//             foreignField: 'remedy',
//             as: 'symptoms',
//         }
//     },
//     {
//         $match: {
// //             $or: [
// //                 { 'descriptions.0': { $exists: false } },
// //                 { 'symptoms.0': { $exists: true } },
// //             ]
//                 'descriptions.0': { $exists: true },
//                 shortName: { $exists: false },
//         }
//     },
//     {
//         $group: {
//             _id: '$name',
//             shortName: { $max: '$shortName' },
//         }
//     },
//     {
//         $sort: { _id: 1 }
//     }
// ]).toArray()

// db.getCollection('remedies').aggregate([
//     {
//         $lookup: {
//             from: 'descriptions',
//             localField: '_id',
//             foreignField: 'remedy',
//             as: 'descriptions',
//         }
//     },
//     {
//         $lookup: {
//             from: 'symptoms',
//             localField: '_id',
//             foreignField: 'remedy',
//             as: 'symptoms',
//         }
//     },
//     {
//         $match: {
// //             $or: [
// //                 { 'descriptions.0': { $exists: false } },
// //                 { 'symptoms.0': { $exists: true } },
// //             ]
//                 'descriptions.0': { $exists: false },
//                 shortName: { $exists: false },
//         }
//     },
//     {
//         $group: {
//             _id: '$name',
//             shortName: { $max: '$shortName' },
//         }
//     },
//     {
//         $sort: { _id: 1 }
//     }
// ]).toArray()