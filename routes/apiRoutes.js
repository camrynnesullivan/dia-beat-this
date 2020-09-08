const Router = require("express").Router();
const userController = require("../controllers/userController");

//routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.send("Welcome to DiaBeatThis!");
});

Router.route("/users").post(userController.createNew);
// .get(userController.getAllUsers)

module.exports = Router;
