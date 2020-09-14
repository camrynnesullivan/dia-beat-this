const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const A1CSchema = new Schema({
  enteredA1C: {
    type: Number,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const A1C = mongoose.model("A1C", A1CSchema);

module.exports = A1C;