import { promisify } from 'util';
import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  let token;
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    console.log(token);

    if (!token) {
      throw new Error();
    } else {
      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      console.log(decoded);

      next();
    }
  } catch (error) {
    res.status(401).send('error: Your ar not logged in! Please log in to get access!');
  }
};
