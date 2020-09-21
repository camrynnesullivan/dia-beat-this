const router = require("express").Router();
const Glycemia = require("../models/BloodSugar");

router.post("/api/glycemia", ({ body }, res) => {
  Glycemia.create(body)
    .then((dbGlycemia) => {
      res.json(dbGlycemia);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/api/glycemia", (req, res) => {
  Glycemia.find({})
    .sort({ date: -1 })
    .then((dbGlycemia) => {
      res.json(dbGlycemia);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
