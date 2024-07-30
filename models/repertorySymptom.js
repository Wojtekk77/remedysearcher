import { Schema, model, models } from 'mongoose';

const RepertorySymptomSchema = new Schema({
  name: { type: String }, // how to recognise symptom
  description: { type: String },
  descriptionAI: { type: String },
  property: { type: Number },
  imagePath: { type: String },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const RepertorySymptom = models.RepertorySymptom || model('RepertorySymptom', RepertorySymptomSchema);

export default RepertorySymptom;
