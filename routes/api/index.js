const path = require("path");
const router = require("express").Router();
const measurementsRoutes = require("./measurements");
const googleRoutes = require("./google");

// Book routes
router.use("/measurements", measurementsRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
