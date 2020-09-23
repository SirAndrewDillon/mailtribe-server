const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n xxx Server reporting for duty on port ${PORT} xxx \n`);
});

// AIzaSyCmqPdLD4a36NREi8m-JgdbtqXrDpMyx5Q API Key
// 1023486174794-4fn3ksqff9on69p5cio4lv4jjv26qmtn.apps.googleusercontent.com Client ID
// 8hkjyOFF6-AZDPUNQAhcpGGu Client Secret
