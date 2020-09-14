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
    const { enteredAC1 } = req.body;
    const newMeasurement = await db.A1C.create({
      enteredAC1: enteredAC1,
    });
    res.json(newMeasurement);
  },
};
