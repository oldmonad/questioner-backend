/* eslint-disable eol-last */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const {
  SECRET,
} = process.env;

const Jwt = {
  async generateToken(payload) {
    const token = await jwt.sign(payload, SECRET, {
      expiresIn: '14d',
    });
    return token;
  },

  async verifyToken(token) {
    const decoded = await jwt.verify(token, SECRET);
    return decoded;
  },
};

export default Jwt;