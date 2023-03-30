import express from "express";
import userRouter from "./routers/user";

const app = express();

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type, Origin, Authorization"
  );
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(userRouter);

app.listen(8001, () => {
  console.log("ok");
});
