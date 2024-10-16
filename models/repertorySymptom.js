import { Schema, model, models } from 'mongoose';

const RepertorySymptomSchema = new Schema({
  name: { type: String }, // how to recognise symptom
  parentName: { type: String },
  parent: { type: Schema.Types.ObjectId },
  isParent: { type: Number }, // MAIN PARENT 1,
  description: { type: String },
  descriptionAI: { type: String },
  property: { type: Number }, // umysl, zawroty glowy, oko, nos
  imagePath: { type: String },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const RepertorySymptom = models.RepertorySymptom || model('RepertorySymptom', RepertorySymptomSchema);

export default RepertorySymptom;
