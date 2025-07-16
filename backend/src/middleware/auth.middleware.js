import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import config from '../config/dotenv.js';

const authMiddleware = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
export default authMiddleware;
