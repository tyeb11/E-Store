import mongoose from "mongoose";
import chalk from "chalk";
mongoose.connect(process.env.DB_URL, (e) => {
  if (e) {
    return console.log(chalk.bgRed("can not connect to database"));
  }
  console.log(chalk.bgGreen("connected to database"));
});
