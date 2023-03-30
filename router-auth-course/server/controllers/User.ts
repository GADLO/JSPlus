import { Request, Response } from "express";
import UserModel from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const { SECRET_KEY } = process.env;

export interface IUserInfo {
  username: string;
  password: string;
}

export async function getUserList(req: Request, res: Response) {
  const users = await UserModel.getUserList();

  res.status(200).json(users);
}

export async function register(req: Request, res: Response) {
  const { username, password }: IUserInfo = req.body;

  try {
    const user = await UserModel.addUser({
      username,
      password,
    });

    res.status(200).json({
      err_code: 0,
      error_message: "ok",
      data: user,
    });
  } catch (e) {
    console.log(e);
    res.status(200).json({
      err_code: 1002,
      err_msg: "The username existed in database",
    });
  }
}

export async function login(req: Request, res: Response) {
  const { username, password }: IUserInfo = req.body;
  const userInfo = await UserModel.getUser(username);

  if (!userInfo) {
    return res.status(200).json({
      err_code: 1003,
      err_msg: "The username does not exist in database",
    });
  }

  const isValidPassword = bcrypt.compareSync(password, userInfo.password!);

  if (!isValidPassword) {
    return res.status(200).json({
      err_code: 1004,
      err_msg: "Got a wrong password",
    });
  }

  /**
   * username
   * level
   * token
   *
   */

  const accessToken = jwt.sign(
    {
      id: String(userInfo._id),
    },
    SECRET_KEY!,
    {
      expiresIn: "60s",
    }
  );

  res.status(200).json({
    err_code: 0,
    err_msg: "ok",
    data: {
      username: userInfo.username,
      level: userInfo.level,
      access_token: accessToken,
    },
  });
}

export async function checkLogin(req: Request, res: Response) {
  res.status(200).json({
    err_code: 0,
    err_msg: "ok",
  });
}

export async function getProfile(req: Request, res: Response) {
  const { id } = req;
  console.log(id);

  const userInfo = await UserModel.getProfile(id!);

  res.status(200).json({
    err_code: 0,
    err_msg: "ok",
    data: userInfo,
  });
}
