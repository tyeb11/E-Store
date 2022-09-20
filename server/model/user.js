import mongoose from "mongoose";
import { Schema } from "mongoose";
import { cartSchema } from "./cart.js";

const userSchema = new Schema({
  id: String,
  name: String,
  cart: [cartSchema],
});

export const User = mongoose.model("users", userSchema);
