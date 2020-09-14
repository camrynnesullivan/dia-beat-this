const Router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const authRoutes = require("../authentication/authRoutes");

Router.use("/api", apiRoutes);
Router.use("/auth", authRoutes);

module.exports = Router;
