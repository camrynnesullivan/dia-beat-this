const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glycemiaSchema = new Schema({
  enteredGlucose: {
    type: Number,
    trim: true,
  },
  glucoseType: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Glycemia = mongoose.model("Glycemia", glycemiaSchema);

module.exports = Glycemia;
