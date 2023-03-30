import { UserModel } from '../db';
import { IUserInfo } from './../controllers/User';

async function getUserList () {
  return await UserModel.find();
}

async function addUser (userInfo: IUserInfo) {
  return await UserModel.create(userInfo);
}

async function getUser (username: string) {
  return await UserModel.findOne({ username });
}

async function getProfile (id: string) {
  const user = await UserModel.findOne({ _id: id });

  return user ? ({
    uid: user._id,
    username: user.username,
    level: user.level
  }) : null;
}

export default {
  addUser,
  getUserList,
  getUser,
  getProfile
}