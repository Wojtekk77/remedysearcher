import { Schema, model, models } from 'mongoose';

const RepertoryImageJSONSchema = new Schema({
  property: { type: Number }, // umysl, zawroty glowy
  json: { type: String },
  imagePath: { type: String },
  imageAlreadyConverted: { type: Boolean },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const RepertoryImageJSON = models.RepertoryImageJSON || model('RepertoryImageJSON', RepertoryImageJSONSchema);

export default RepertoryImageJSON;
