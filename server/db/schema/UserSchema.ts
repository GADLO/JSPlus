import bcrypt from "bcrypt";
import { Schema } from "mongoose";

export default new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    set(val: string) {
      return bcrypt.hashSync(val, 10);
    },
  },
  is_admin: {
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
