const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GlycemiaSchema = new Schema({
  enteredGlucose: {
    type: Number,
    trim: true,
    required: true
  },
  afterMeal: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Glycemia = mongoose.model("Glycemia", GlycemiaSchema);

module.exports = Glycemia;
