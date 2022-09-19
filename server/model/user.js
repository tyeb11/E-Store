import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  id: String,
  name: String,
});

export const User = mongoose.model("users", userSchema);
