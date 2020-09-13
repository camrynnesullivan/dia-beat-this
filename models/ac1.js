const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AC1Schema = new Schema({
  enteredAC1: {
    type: Number,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const AC1 = mongoose.model("AC1", AC1Schema);

module.exports = AC1;
