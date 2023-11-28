import { Schema, model, models } from 'mongoose';

const WordSentenceSchema = new Schema({
  description: { type: Schema.Types.ObjectId, required: true },
  word: { type: String },
  sentences: { type: [Number] },
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

const WordSentence = models.WordSentence || model('WordSentence', WordSentenceSchema);

export default WordSentence;
