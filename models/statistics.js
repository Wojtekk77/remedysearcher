import { Schema, model, models } from 'mongoose';

const StatisticsSchema = new Schema({
  query: { type: String },
  results: { type: Number },
  user: { type: Schema.Types.ObjectId },
}, {
  timestamps: true
});

const Statistics = models.Statistics || model('Statistics', StatisticsSchema);

export default Statistics;
