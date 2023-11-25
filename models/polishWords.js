import { Schema, model, models } from 'mongoose';

const PolishWordsSchema = new Schema({
  name: { type: String, unique: true, required: true },
  variations: { type: Schema.Types.ObjectId },
  hasDescReference: { type: Boolean },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const PolishWords = models.PolishWords || model('PolishWords', PolishWordsSchema);

export default PolishWords;
