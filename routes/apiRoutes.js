const Router = require("express").Router();
const userController = require("../controllers/userController");
const measurementController = require("../controllers/measurementController");
const journalController = require("../controllers/journalController");
//routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.send("Welcome to DiaBeatThis!");
});

Router.route("/measurements")
  .post(measurementController.createNew)
  .get(measurementController.findAll);
Router.route("/journal")
  .post(journalController.createNew)
  .get(journalController.findAll);

Router.route("/:id").get(journalController.findById);
// .put(journalController.update)
// .delete(journalController.remove);

Router.route("/A1Cmeasurements")
  .post(measurementController.createNewA1C)
  .get(measurementController.findAllA1C);

Router.route("/FoodGoal")
  .post(measurementController.createNewFoodGoal)
  .get(measurementController.findAllFoodGoal);

module.exports = Router;
