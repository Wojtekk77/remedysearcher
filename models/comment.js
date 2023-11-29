import { Schema, model, models } from 'mongoose';

const CommentSchem = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  comment: {
    type: String,
    required: [true, 'Comment is required.'],
  },
  tag: {
    type: String,
    // required: [true, 'Tag is required.'],
  }
});

const Comment = models.Comment || model('Comment', CommentSchem);

export default Comment;