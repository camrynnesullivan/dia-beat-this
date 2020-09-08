//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("./authentication/passport");

//Setup the port and the express app
const PORT = process.env.PORT || 4000;
const app = express();

//Setup the mongodb database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/passportJWT", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//middlewares for accepting post requests

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/", routes);
//start the server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
