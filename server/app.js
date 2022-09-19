import express from "express";
import chalk from "chalk";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import cookieSession from "cookie-session";
import passport from "passport";
import storeRoute from "./routes/store.js";

import "./model/connect.js";
import "./model/user.js";
import "./util/passport.js";

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEYS],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoute(app);
storeRoute(app);

app.listen(process.env.PORT, () => {
  console.log(chalk.green(`Server listening on port ${process.env.PORT}`));
});
