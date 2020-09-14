const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  date: Date,
  body: String,
});

const Journal = mongoose.model("Journal", userSchema);

module.exports = Journal;
