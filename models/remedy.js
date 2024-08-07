import { Schema, model, models } from 'mongoose';

const RemedySchema = new Schema({
  name: { type: String, unique: true, required: true },
  polishName: { type: String },
  destroyed: { type: Boolean },
  shortName: { type: String },
  otherNames: { type: [String] },
}, {
  timestamps: true
});

const Remedy = models.Remedy || model('Remedy', RemedySchema);

export default Remedy;
