import dbConnect from "./connect";
import UserSchema from "./schema/UserSchema";
import TodoSchema from "./schema/TodoSchema";

const db = dbConnect();

export const UserModel = db.model("User", UserSchema);
export const TodoModel = db.model("Todo", TodoSchema);
