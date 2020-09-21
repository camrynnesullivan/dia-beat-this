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

<<<<<<< HEAD
Router.route("/:id")
  .get(journalController.findById)
  // .put(journalController.update)
=======
Router.route("/journal/:id")
  .get(journalController.findById)
  .put(journalController.update)
>>>>>>> 5516ab12769a0d975f5db6749fe739ef403bc082
  .delete(journalController.remove);

Router.route("/A1Cmeasurements")
  .post(measurementController.createNewA1C)
  .get(measurementController.findAllA1C);

Router.route("/FoodGoal")
  .post(measurementController.createNewFoodGoal)
  .get(measurementController.findAllFoodGoal);

module.exports = Router;
