const router = require("express").Router();
const measurementController = require("../../controllers/measurementController");

// Matches with "/api/books"
// router
//   .route("/")
//   .get(measurementController.findAll)
//   .post(measurementController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(measurementController.findById)
//   .put(measurementController.update)
//   .delete(measurementController.remove);

Router.route("/api/A1Cmeasurements")
  .post(measurementController.createNewA1C)
  .get(measurementController.findAllA1C);

Router.route("/api/measurements")
  .post(measurementController.createNew)
  .get(measurementController.findAll);
// .get(userController.getAllUsers)
module.exports = router;
