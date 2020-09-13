const Router = require("express").Router();
const userController = require("../controllers/userController");
const measurementController = require("../controllers/measurementController");
//routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.send("Welcome to DiaBeatThis!");
});

Router.route("/measurements")
  .post(measurementController.createNew)
  .get(measurementController.findAll);
// .get(userController.getAllUsers)

module.exports = Router;
