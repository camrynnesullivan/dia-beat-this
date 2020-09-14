const db = require("../models");

module.exports = {
  createNew: async (req, res) => {
    const { body } = req.body;
    const newJournal = await db.Journal.create({
      body: body,
    });

    res.json(newJournal);
  },
  findAll: function (req, res) {
    db.Journal.find(req.query)
      .then((dbJournal) => res.json(dbJournal))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Journal.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

// findAll: function(req, res) {
//   db.Post.find(req.query)
//     .sort({ date: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// findById: function(req, res) {
//   db.Post.findById(req.params.id)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// create: function(req, res) {
//   db.Post.create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// update: function(req, res) {
//   db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// remove: function(req, res) {
//   db.Post.findById({ _id: req.params.id })
//     .then(dbModel => dbModel.remove())
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// }
