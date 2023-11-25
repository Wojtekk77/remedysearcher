import { Schema, model, models } from 'mongoose';

const BookSchema = new Schema({
  title: { type: String },
  originalTitle: { type: String },
  authors:{ type: [Schema.Types.ObjectId] },
  isbn: { type: String },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const Book = models.Book || model('Book', BookSchema);

export default Book;
