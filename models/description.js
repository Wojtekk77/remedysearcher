import { Schema, model, models } from 'mongoose';

const DescriptionSchema = new Schema({
  description: { type: String, unique: true, required: true },
  book: { type: Schema.Types.ObjectId },
  remedy:{ type: Schema.Types.ObjectId },
  sentences: { type: [String] },
  words: { type: [String] },
  // wordSentences: {
  //     type: Map,
  //     of: [Number],
  // },
  wordSentencesAsText: { type: String },
  // wordSentencesAsArrOfObj: { type: [{ word: { type: String }, sentences: { type: [Number] } }] },
  remedyName: { type: String },
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

const Description = models.Description || model('Description', DescriptionSchema);

export default Description;
