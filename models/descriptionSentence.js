import { Schema, model, models } from 'mongoose';

const DescriptionSentenceSchema = new Schema({
  description: { type: Schema.Types.ObjectId, required: true },
  sentence: { type: String },
  sentenceNumber: { type: Number },
  // wordSentencesAsArrOfObj: { type: [{ word: { type: String }, sentences: { type: [Number] } }] },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

// ? What below does ?
// DescriptionSchema.set('toJSON', {
//   virtuals: true,
//   versionKey: false,
//   // transform: const (doc, ret) {
//   //     delete ret._id;
//   //     delete ret.hash;
//   // }
// });

const DescriptionSentence = models.DescriptionSentence || model('DescriptionSentence', DescriptionSentenceSchema);

export default DescriptionSentence;
