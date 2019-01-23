/* eslint-disable eol-last */
import jwt from '../utilities/jwt';
import bcrypt from '../utilities/bcrypt';
import UserModel from '../models/user';
import {
  successResponse,
  errorResponse,
} from '../utilities/responseformat';


const UserController = {
  async createNewUser(req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return errorResponse(res, 400, 'Passwords do not match');
    }

    const newUser = new UserModel(req.body);
    const isExistingUserMail = await UserModel.findUserByEmail(newUser.email);
    if (isExistingUserMail) {
      return errorResponse(res, 409, 'This email address is not available');
    }

    const isExistingUsername = await UserModel.findUserByUsername(newUser.username);
    if (isExistingUsername) {
      return errorResponse(res, 409, 'This username is not available')
    }
    newUser.password = bcrypt.hashPassword(newUser.password);

    const createdUser = await newUser.newUserSignUp();

    return successResponse(res, 201, 'User Created', createdUser);
  },

  async loginUser(req, res) {
    const {
      email,
      password,
    } = req.body;

    const isExistingUserMail = await UserModel.findUserByEmail(email);
    if (!isExistingUserMail) {
      return res.status(404).json({
        status: 404,
        error: 'The credentials you provided is incorrect',
      });
    }

    if (!bcrypt.comparePassword(isExistingUserMail.password, password)) {
      return res.status(401).json({
        status: 401,
        error: 'The credentials you provided is incorrect',
      });
    }

    const tokenData = {
      id: isExistingUserMail.id,
      username: isExistingUserMail.username,
      admin: isExistingUserMail.admin,
    };

    const token = await jwt.generateToken(tokenData);
    return res.status(200).send({
      status: 200,
      message: 'You are logged in',
      token,
    });
  },
};

export default UserController;