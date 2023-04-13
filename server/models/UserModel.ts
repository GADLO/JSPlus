import { IUserInfo } from "../controllers/UserController";
import { UserModel } from "../db";

//注册
async function addUser(userinfo: IUserInfo) {
  await UserModel.create(userinfo);
}

//获取用户列表
async function getUserList() {
  console.log("<-Model-getUserList");

  return await UserModel.find();
}

//登陆验证查找用户
async function getUser(username: string) {
  console.log("<-Model-getUser");

  return UserModel.findOne({ username });
}

async function getProfile(id: string) {
  const user = await UserModel.findOne({ _id: id });

  return user
    ? {
        uid: user._id,
        username: user.username,
        level: user.level,
      }
    : null;
}

//使用命名空间输出
export default {
  addUser,
  getUserList,
  getUser,
  getProfile,
};
