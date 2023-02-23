var passport = require("passport"),
  LocalStretegy = require("passport-local").Strategy;

passport.use(
  new LocalStretegy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "incorrect username" });
      }
    });
    if (!user.validPassword(password)) {
      return done(null, false, { message: "incorrect password" });
    }
    return done(null, user);
  })
);
