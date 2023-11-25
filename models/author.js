import { Schema, model, models } from 'mongoose';

const AuthorSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  destroyed: { type: Boolean },
}, {
  // add createdAt and updatedAt timestamps
  timestamps: true
});

const Author = models.Author || model('Author', AuthorSchema);

export default Author;