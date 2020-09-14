const Router = require("express").Router();
const userController = require("../controllers/userController");
const measurementController = require("../controllers/measurementController");
//routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.send("Welcome to DiaBeatThis!");
});

Router.route("/measurements").post(measurementController.createNew)
.get(measurementController.findAll)

Router.route("/A1Cmeasurements").post(measurementController.createNewA1C)
.get(measurementController.findAllA1C)

Router.route("/FoodGoal").post(measurementController.createNewFoodGoal)
.get(measurementController.findAllFoodGoal)

module.exports = Router;
