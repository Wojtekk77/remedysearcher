import { Schema, model, models } from 'mongoose';

const PolishWordArraySchema = new Schema({
  variations: { type: [String] },
  // descriptions: { type: [Schema.Types.ObjectId] },
  hasDescReference: { type: Boolean },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const PolishWordArray = models.PolishWordArray || model('PolishWordArray', PolishWordArraySchema);

export default PolishWordArray;
