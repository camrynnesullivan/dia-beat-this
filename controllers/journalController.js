const db = require("../models");

module.exports = {
  createNew: async (req, res) => {
    const { date, body } = req.body;
    const newJournal = await db.Journal.create({
      date: date,
      body: body,
    });

    res.json(newJournal);
  },
};
