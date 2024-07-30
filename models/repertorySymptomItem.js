import { Schema, model, models } from 'mongoose';

const RepertorySymptomItemSchema = new Schema({
  repertorySymptom: { type: Schema.Types.ObjectId },
  remedy: { type: Schema.Types.ObjectId },
  shortName: { type: String }, // shortName from repertory
  strength: { type: Number },
  destroyed: { type: Boolean },
}, {
  timestamps: true
});

const RepertorySymptomItem = models.RepertorySymptomItem || model('RepertorySymptomItem', RepertorySymptomItemSchema);

export default RepertorySymptomItem;
