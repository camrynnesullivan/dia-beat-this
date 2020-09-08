const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      return db.User.findOne({ email, password })
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          return cb(null, user, { message: "Logged In Successfully" });
        })
        .catch((err) => cb(err));
    }
  )
);

//token Strategy

passport.use(
  new JWTStrategy(
    {
      //{authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU3ZGU1MWE3MGE1YTE4YjRiNTVlYjUiLCJlbWFpbCI6ImJlbm55QGVnZ3NuYmVubnkuY29tIiwicGFzc3dvcmQiOiIxMjM0cGFzc3dvcmQiLCJfX3YiOjAsImlhdCI6MTU5OTU5NTIzOH0.INxBq7EAB-612AOj5u_OYaqoKH-gDSEtpLZwei-yRvI"}
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "superSecret",
    },
    function (jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return db.User.find({ _id: jwtPayload.id })
        .then((user) => {
          return cb(null, user);
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

module.exports = passport;
