import { Schema, model, models } from 'mongoose';

const IllnessSchema = new Schema({
  name: { type: String },
  description: { type: String },
  dosage:{ type: String },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});
// {
//     illness: '',
//     description: ``,
//     dosage: ``,
//     arrOfRemedies: [
//         {
//             remedy: '',
//             mainSymptoms: [
//                 '',
//             ],
//             confirmingSymptoms: [
//                 '',
//             ],
//         },
//         {
//             remedy: '',
//             mainSymptoms: [
//                 '',
//             ],
//             confirmingSymptoms: [
//                 '',
//             ],
//         }
//     ],
// }
const Illness = models.Illness || model('Illness', IllnessSchema);

export default Illness;
