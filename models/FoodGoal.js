const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodGoalSchema = new Schema({
  calorieGoal: {
    type: Number,
    trim: true,
  },
  carbGoal: {
    type: Number,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const FoodGoal = mongoose.model("FoodGoal", FoodGoalSchema);

module.exports = FoodGoal;
