import passport from "passport";
import login from "../middleware/login.js";

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
  app.get("/api/auth/logout", login, (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/auth/current-user", login, (req, res) => {
    delete req.user.cart;
    res.send(req.user);
  });
};
