import { Request, Response, NextFunction } from "express";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

//引用全局环境变量的私钥
const { SECRET_KEY } = process.env;

export interface IUserInfo {
  username: string;
  password: string;
}

export async function getUserList(req: Request, res: Response) {
  console.log("<-Cotroller-getUserList");

  const users = await UserModel.getUserList();

  res.status(200).json({
    err_code: 0,
    err_msg: "ok",
    data: users,
  });
}

//注册
export async function register(req: Request, res: Response) {
  //获取用户输入字段
  const { username, password }: IUserInfo = req.body;

  try {
    //添加用户到数据库
    const user = await UserModel.addUser({ username, password });
    res.status(200).json({
      err_code: 0,
      err_msg: "ok",
      data: user,
    });
  } catch (e) {
    //验证用户是否存在
    res.status(200).json({
      reqData: req.body,
      err_code: 1002,
      err_msg: "username exsisted in database",
      err: e,
    });
  }
}

//登录
export async function login(req: Request, res: Response, next: NextFunction) {
  const { username, password }: IUserInfo = req.body;

  //查询用户是否存在
  const userInfo = await UserModel.getUser(username);

  if (!userInfo) {
    return res.status(403).json({
      err_code: 1003,
      err_msg: "The user is not exist in database",
    });
  }

  //比对数据库密码，userInfo.password不一定存在，后面加！断言处理
  const isValidPassword = bcrypt.compareSync(password, userInfo.password!);

  //判断相等性，不相等返回报错信息
  if (!isValidPassword) {
    return res.status(403).json({
      err_code: 1004,
      err_msg: "Got a wrong password",
    });
  }

  //使用jsonwebtoken创建token
  const Token = jwt.sign(
    {
      id: String(userInfo._id),
    },
    SECRET_KEY!,
    {
      expiresIn: "60s",
    }
  );

  // 返回登陆用户信息与token
  res.status(201).json({
    err_code: 0,
    err_msg: "Authentication passed",
    data: {
      username: userInfo.username,
      level: userInfo.level,
      token: Token,
    },
  });
}

//验证登录状态
export async function checkLogin(req: Request, res: Response) {
  res.status(200).json({
    err_code: 0,
    err_msg: "ok",
  });
}

//获取个人信息
export async function getProfile(req: Request, res: Response) {
  console.log("<-Cotroller-getProfile");

  const { id } = req;

  const userInfo = await UserModel.getProfile(id!);

  if (!userInfo) {
    console.log("userInfo is not exist");

    return;
  }
  res.status(200).json({
    err_code: 0,
    err_msg: "ok",
    data: userInfo,
  });
}
