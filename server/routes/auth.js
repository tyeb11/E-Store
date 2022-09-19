import passport from "passport";

export default (app) => {
  app.get(
    "/api/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/api/store/categories");
    }
  );

  app.get(
    "/api/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
  );

  app.get(
    "/api/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect("/api/store/categories");
    }
  );
};
