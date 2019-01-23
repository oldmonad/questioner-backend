/* eslint-disable consistent-return */
/* eslint-disable eol-last */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {
  errorResponse,
} from '../utilities/responseformat';


dotenv.config();

const Auth = {

  async verifyToken(req, res, next) {
    const header = req.headers.authorization;
    if (typeof header === 'undefined') {
      return errorResponse(res, 401, 'You are not authorized to make this action');
    }

    const token = header.split(' ')[1];
    if (!token) {
      return errorResponse(res, 401, 'You are not authorized to make this action please login');
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async adminAuth(req, res, next) {
    const {
      admin,
    } = req.user;

    if (!admin) {
      return errorResponse(res, 401, 'You are not authorized to make this action');
    }
    next();
  },
};

export default Auth;