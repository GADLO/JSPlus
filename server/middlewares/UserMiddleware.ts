import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config as dotEnvConfig } from "dotenv";
import { IUserInfo } from "../controllers/UserController";
dotEnvConfig();

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // console.log(req);

  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(200).json({
      err_code: 1005,
      err_msg: "The API must have the Authorization",
    });
  }

  //获取请求体token
  const rawToken = auth.split(" ")[1];

  try {
    //验证token
    const tokenData = jwt.verify(
      rawToken,
      process.env.SECRET_KEY!
    ) as JwtPayload;

    //给request传入id
    req.id = tokenData.id;
  } catch (e) {
    res.status(200).json({
      err_code: 1007,
      er_msg: "Token verify failed",
    });
  }
  next();
}

export async function checkBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, password }: IUserInfo = req.body;

  //验证用户输入字段
  if (username.length < 6 || password.length < 6) {
    return res.status(403).json({
      err_code: 1001,
      err_msg: "Invalid username or password length",
    });
  } else {
    next();
  }
}
