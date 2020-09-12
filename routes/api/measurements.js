const router = require("express").Router();
const measurementController = require("../../controllers/measurementController");

// Matches with "/api/books"
router
  .route("/")
  .get(measurementController.findAll)
  .post(measurementController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(measurementController.findById)
//   .put(measurementController.update)
//   .delete(measurementController.remove);
Router.route("/api/measurements").post(measurementController.createNew);
// .get(userController.getAllUsers)
module.exports = router;
