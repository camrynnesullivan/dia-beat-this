const router = require("express").Router();
const measurementController = require("../../controllers/measurementController");

Router.route("/api/A1Cmeasurements")
  .post(measurementController.createNewA1C)
  .get(measurementController.findAllA1C);

Router.route("/api/measurements")
  .post(measurementController.createNew)
  .get(measurementController.findAll);
// .get(userController.getAllUsers)

Router.route("/api/FoodGoal")
  .post(measurementController.createNewFoodGoal)
  .get(measurementController.findAllFoodGoal);

module.exports = router;
