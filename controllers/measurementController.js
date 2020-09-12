const db = require("../models");

// Defining methods for the measurementController
module.exports = {
  findAll: function(req, res) {
    db.Glycemia.find(req.query)
      .then(dbGlycemia => res.json(dbGlycemia))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Glycemia.findById(req.params.id)
      .then(dbGlycemia=> res.json(dbGlycemia))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Glycemia.create(req.body)
      .then(dbGlycemia => res.json(dbGlycemia))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Glycemia.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbGlycemia => res.json(dbGlycemia))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Glycemia.findById(req.params.id)
      .then(dbGlycemia => dbGlycemia.remove())
      .then(dbGlycemia => res.json(dbGlycemia))
      .catch(err => res.status(422).json(err));
  }
};
