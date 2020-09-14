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
};
