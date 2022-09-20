import mongoose from "mongoose";
import { Schema } from "mongoose";

export const cartSchema = new Schema({
  itemID: Number,
  itemName: String,
  itemCount: Number,
  itemDate: Date,
});
