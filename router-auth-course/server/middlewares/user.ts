import jwt, { JwtPayload } from 'jsonwebtoken';
import {
  Request,
  Response,
  NextFunction
} from 'express';
import { config as dotEnvConfig } from 'dotenv';
import { IUserInfo } from '../controllers/User';

dotEnvConfig();

export async function checkAuth (req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  
  if (!auth) {
    return res.status(200).json({
      err_code: 1005,
      err_msg: 'The API must tabe the Authorization'
    });
  }

  const rawToken = auth.split(' ')[1];

  try {
    const tokenData = jwt.verify(rawToken, process.env.SECRET_KEY!) as JwtPayload;

    if (!tokenData) {
      return res.status(200).json({
        err_code: 1006,
        err_msg: 'Invalid token'
      });
    }

    req.id = tokenData.id;
    next();
  } catch (e) {
    res.status(200).json({
      err_code: 1007,
      err_msg: 'Token verify failed'
    })
  }
}

export function checkBody (req: Request, res: Response, next: NextFunction) {
  const { username, password }: IUserInfo = req.body;

  if (username.length < 6 || password.length < 6) {
    return res.status(200).json({
      err_code: 1001,
      err_msg: 'Invalid username or password length'
    });
  } else {
    next();
  }

}