import dbConnect from './connect';
import UserSchema from './schema/User';

const db = dbConnect();

export const UserModel = db.model('User', UserSchema);