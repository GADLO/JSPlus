import { Router } from 'express';
import bodyParser from 'body-parser';
import {
  checkAuth, checkBody
} from '../middlewares/user';
import { 
  getProfile, 
  getUserList, 
  login, 
  register,
  checkLogin
} from '../controllers/User';

const router = Router();
const jsonParser = bodyParser.json();

/**
 * req -> request  对象
 * res -> response 对象
 * next            函数
 * 
 * 每一个回调都是一个中间件函数
 */

router.get('/api/user/get_user_list', getUserList);
router.post('/api/user/register', jsonParser, checkBody, register);
router.post('/api/user/login', jsonParser, checkBody, login);
router.post('/api/user/profile', jsonParser, checkAuth, getProfile);
router.post('/api/user/check_login', jsonParser, checkAuth, checkLogin);
export default router;