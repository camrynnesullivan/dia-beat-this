const Router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const authRoutes = require("../authentication/authRoutes");
// const passport = require("../authentication/passport");
// const glycemiaRoutes = require("./glycemiaRoutes");

Router.use("/api", apiRoutes);
Router.use("/auth", authRoutes);

module.exports = Router;
