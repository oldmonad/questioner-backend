/* eslint-disable eol-last */
// import db from '../db/index';
import bcrypt from '../utilities/bcrypt';
import UserModel from '../models/models';


const User = {
  async create(req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      res.status(400).json({
        status: 400,
        error: 'Passwords do not match',
      });
    }

    const user = new UserModel(req.body);
    const existingUserMail = await UserModel.findUserByEmail(user.email);
    if (existingUserMail) {
      return res.status(409).json({
        status: 409,
        error: 'This email address is already taken',
      });
    }

    const existingUsername = await UserModel.findUserByUsername(user.username);
    if (existingUsername) {
      return res.status(409).json({
        status: 409,
        error: 'This username is already taken',
      });
    }
    user.password = bcrypt.hashPassword(user.password);

    const latestUser = await user.signUp();

    const response = {
      id: latestUser.id,
      firstname: latestUser.firstname,
      lastname: latestUser.lastname,
      username: latestUser.username,
      email: latestUser.email,
      phonenumber: latestUser.phonenumber,
      createdon: latestUser.createdon,
    };

    return res.status(201).json({
      status: 201,
      data: [response],
    });
  },

};

export default User;