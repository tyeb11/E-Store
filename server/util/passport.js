import mongoose from "mongoose";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import GitHubStrategy from "passport-github2";
import { User } from "../model/user.js";

passport.serializeUser((user, done) => {
  console.log("user : ", user);
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById({ _id: id });
  console.log("us : ", user);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("accessToken : ", accessToken);
      console.log("refrecsToken : ", refreshToken);
      console.log("profile : ", profile);
      console.log("cb : ", done);
      const userExists = await User.findOne({ id: profile.id });
      if (userExists) {
        console.log("userExists : ", userExists);
        return done(null, userExists);
      }
      const user = await new User({
        id: profile.id,
        name: profile.displayName,
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log("accessToken : ", accessToken);
      console.log("refrecsToken : ", refreshToken);
      console.log("profile : ", profile);
      console.log("cb : ", done);
      const userExists = await User.findOne({ id: profile.id });
      if (userExists) {
        console.log("userExists : ", userExists);
        return done(null, userExists);
      }
      const user = await new User({
        id: profile.id,
        name: profile.username,
      }).save();
      done(null, user);
    }
  )
);
