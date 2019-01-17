/* eslint-disable consistent-return */
/* eslint-disable eol-last */
import jwt from 'jsonwebtoken';

const Auth = {

  async verifyToken(req, res, next) {
    const header = req.headers.authorization;
    if (typeof header === 'undefined') {
      return res.status(401).json({
        status: 401,
        error: 'Unauthorized header',
      });
    }

    const token = header.split(' ')[1];
    if (!token) {
      return res.status(403).send({
        status: 403,
        error: 'Token is not provided',
      });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
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
      return res.status(403).json({
        status: 403,
        error: 'Unauthorized request',
      });
    }
    next();
  },
};

export default Auth;