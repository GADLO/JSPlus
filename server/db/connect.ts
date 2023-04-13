import mongoose from "mongoose";

export default function dbConnect() {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://127.0.0.1:27017/hello");

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.log("Database connect error", err);
  });

  db.on("close", () => {
    console.log("Database connect closed");
  });

  db.on("open", () => {
    console.log("Database connect successed!");
  });

  return db;
}
