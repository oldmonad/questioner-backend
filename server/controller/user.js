/* eslint-disable eol-last */
import jwt from '../utilities/jwt';
import bcrypt from '../utilities/bcrypt';
import UserModel from '../models/user';


const UserController = {
  async createNewUser(req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({
        status: 400,
        error: 'Passwords do not match',
      });
    }

    const newUser = new UserModel(req.body);
    const isExistingUserMail = await UserModel.findUserByEmail(newUser.email);
    if (isExistingUserMail) {
      return res.status(409).json({
        status: 409,
        error: 'This email address is already taken',
      });
    }

    const isExistingUsername = await UserModel.findUserByUsername(newUser.username);
    if (isExistingUsername) {
      return res.status(409).json({
        status: 409,
        error: 'This username is already taken',
      });
    }
    newUser.password = bcrypt.hashPassword(newUser.password);

    const createdUser = await newUser.newUserSignUp();

    return res.status(201).json({
      status: 201,
      message: 'User created',
      data: createdUser,
    });
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