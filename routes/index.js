const Router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const authRoutes = require("../authentication/authRoutes");
const passport = require("../authentication/passport");
const glycemiaRoutes = require("./glycemiaRoutes");

Router.use("/api/glycemia", glycemiaRoutes);
Router.use("/api", passport.authenticate("jwt", { session: false }), apiRoutes);

Router.use("/auth", authRoutes);

module.exports = Router;
