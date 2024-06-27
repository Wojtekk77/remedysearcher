import { Schema, model, models } from 'mongoose';

const SymptomSchema = new Schema({
  remedy: { type: Schema.Types.ObjectId, required: true },
  illness: { type: Schema.Types.ObjectId, required: true },
  description: { type: String, required: true },
  descriptionAI: { type: String, required: true },
  isMainSymptom: { type: Boolean },
  order: { type: Number, required: true },
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
const Symptom = models.Symptom || model('Symptom', SymptomSchema);

export default Symptom;
