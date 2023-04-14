import bcrypt from "bcrypt";
import { Schema } from "mongoose";

export default new Schema({
  todo: {
    type: String,
    unique: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  level: {
    type: Number,
    default: 1,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
