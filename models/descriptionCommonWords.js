import { Schema, model, models } from 'mongoose';

const DescriptionCommonWordsSchema = new Schema({
  points: Number,
  words:{ type: [String] },
  sentences: { type: [Number] },
  useful: { type: Boolean },
  description: { type: Schema.Types.ObjectId },
  polishWordArray: { type: Schema.Types.ObjectId },
  descName: { type: String },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const DescriptionCommonWords = models.DescriptionCommonWords || model('DescriptionCommonWords', DescriptionCommonWordsSchema);

export default DescriptionCommonWords;
