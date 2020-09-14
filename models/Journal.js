const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  date: { type: Date, default: Date.now },
  body: String,
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
