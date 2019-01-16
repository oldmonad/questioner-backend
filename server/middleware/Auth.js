/* eslint-disable consistent-return */
/* eslint-disable eol-last */
import jwt from 'jsonwebtoken';
import db from '../db/index';

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
      const queryText = 'SELECT id, username, admin FROM users WHERE id = $1';
      const {
        rows,
      } = await db.query(queryText, [decoded.id, decoded.username, decoded.admin]);
      if (!rows[0]) {
        return res.status(403).send({
          status: 403,
          error: 'The token you provided is invalid',
        });
      }
      req.user = {
        id: decoded.id,
        username: decoded.username,
        admin: decoded.admin,
      };

      next();
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default Auth;