const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodGoalSchema = new Schema({
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

const FoodGoal = mongoose.model("Glycemia", FoodGoalSchema);

module.exports = Glycemia;
