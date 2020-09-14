const db = require("../models");

// Defining methods for the measurementController
// module.exports = {
//   findAll: function(req, res) {
//     db.Glycemia.find(req.query)
//       .then(dbGlycemia => res.json(dbGlycemia))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Glycemia.findById(req.params.id)
//       .then(dbGlycemia=> res.json(dbGlycemia))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Glycemia.create(req.body)
//       .then(dbGlycemia => res.json(dbGlycemia))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Glycemia.findOneAndUpdate({ id: req.params.id }, req.body)
//       .then(dbGlycemia => res.json(dbGlycemia))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Glycemia.findById(req.params.id)
//       .then(dbGlycemia => dbGlycemia.remove())
//       .then(dbGlycemia => res.json(dbGlycemia))
//       .catch(err => res.status(422).json(err));
//   }
// };
module.exports = {
  createNew: async (req, res) => {
    const { enteredGlucose, afterMeal } = req.body;
    const newMeasurement = await db.Glycemia.create({
      enteredGlucose: enteredGlucose,
      afterMeal: afterMeal,
    });
    res.json(newMeasurement);
  },
  findAll: function(req, res) {
    db.Glycemia.find(req.query)
      .then(dbGlycemia => res.json(dbGlycemia))
      .catch(err => res.status(422).json(err));
  },
  createNewA1C: async (req, res) => {
    console.log(req.body)
    const { enteredA1C } = req.body;
    const newMeasurement = await db.A1C.create({
      enteredA1C: enteredA1C,
    });
    res.json(newMeasurement);
  },
  findAllA1C: function(req, res) {
    db.A1C.find(req.query)
      .then(dbA1C => res.json(dbA1C))
      .catch(err => res.status(422).json(err));
  },
  createFoodGoal: async (req, res) => {
    console.log(req.body)
    const { enteredFoodGoal } = req.body;
    const newFoodGOal = await db.FoodGoal.create({
      enteredFoodGoal: enteredFoodGoal,
    });
    res.json(newMeasurement);
  },
  findAllFoodGoal: function(req, res) {
    db.FoodGoal.find(req.query)
      .then(dbFoodGoal => res.json(dbFoodGoal))
      .catch(err => res.status(422).json(err));
  },
};
