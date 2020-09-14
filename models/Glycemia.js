const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GlycemiaSchema = new Schema({
  enteredGlucose: {
    type: Number,
    trim: true,
  },
  afterMeal: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Glycemia = mongoose.model("Glycemia", GlycemiaSchema);

module.exports = Glycemia;
