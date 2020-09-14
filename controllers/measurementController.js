const db = require("../models");
module.exports = {
  createNew: async (req, res) => {
    const { enteredGlucose, afterMeal } = req.body;
    const newMeasurement = await db.Glycemia.create({
      enteredGlucose: enteredGlucose,
      afterMeal: afterMeal,
    });
    res.json(newMeasurement);
  },
  findAll: function (req, res) {
    db.Glycemia.find(req.query)
      .then((dbGlycemia) => res.json(dbGlycemia))
      .catch((err) => res.status(422).json(err));
  },
  createNewA1C: async (req, res) => {
    console.log(req.body);
    const { enteredA1C } = req.body;
    const newMeasurement = await db.A1C.create({
      enteredA1C: enteredA1C,
    });
    res.json(newMeasurement);
  },
  findAllA1C: function (req, res) {
    db.A1C.find(req.query)
      .then((dbA1C) => res.json(dbA1C))
      .catch((err) => res.status(422).json(err));
  },
  createNewFoodGoal: async (req, res) => {
    console.log(req.body)
    const { carbGoal, calorieGoal } = req.body;
    const newFoodGoal = await db.FoodGoal.create({
      calorieGoal: carbGoal,
      carbGoal: calorieGoal,
    });
    res.json(newFoodGoal);
  },
  findAllFoodGoal: function(req, res) {
    db.FoodGoal.find(req.query)
      .then(dbFoodGoal => res.json(dbFoodGoal))
      .catch(err => res.status(422).json(err));
  },
};