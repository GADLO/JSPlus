import { Router } from "express";
import bodyParser from "body-parser";
import { checkAuth, checkBody } from "../middlewares/UserMiddleware";
import {
  register,
  login,
  checkLogin,
  getProfile,
  getUserList,
} from "../controllers/UserController";

const router = Router();
const jsonParser = bodyParser.json();

router.get("/api/user/get_user_list", getUserList);
router.post("/api/user/register", jsonParser, checkBody, register);
router.post("/api/user/login", jsonParser, checkBody, login);
router.post("/api/user/profile", jsonParser, checkAuth, getProfile);
router.post("/api/user/check_login", jsonParser, checkAuth, checkLogin);
export default router;
