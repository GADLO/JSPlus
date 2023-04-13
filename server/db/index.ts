import dbConnect from "./connect";
import UserSchema from "./schema/UserSchema";

const db = dbConnect();

export const UserModel = db.model("User", UserSchema);
