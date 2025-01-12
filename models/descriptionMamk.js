import { Schema, model, models } from 'mongoose';

const DescriptionMamkSchema = new Schema({
  description: {
    type: Map,
    of: String
  },
  descriptionHtml: { type: String },
  words: { type: [String] },
  book: { type: Schema.Types.ObjectId },
  remedy: { type: Schema.Types.ObjectId },
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

const DescriptionMamk = models.DescriptionMamk || model('DescriptionMamk', DescriptionMamkSchema);

export default DescriptionMamk;
