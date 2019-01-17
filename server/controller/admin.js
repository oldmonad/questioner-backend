/* eslint-disable eol-last */
import jwt from '../utilities/jwt';
import bcrypt from '../utilities/bcrypt';
import AdminModel from '../models/admin';


const AdminController = {
  async createnewAdmin(req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({
        status: 400,
        error: 'Passwords do not match',
      });
    }

    const newAdmin = new AdminModel(req.body);
    const isExistingAdminMail = await AdminModel.findAdminByEmail(newAdmin.email);
    if (isExistingAdminMail) {
      return res.status(409).json({
        status: 409,
        error: 'This email address is already taken',
      });
    }

    const isExistingAdminName = await AdminModel.findAdminByUsername(newAdmin.username);
    if (isExistingAdminName) {
      return res.status(409).json({
        status: 409,
        error: 'This username is already taken',
      });
    }
    newAdmin.password = bcrypt.hashPassword(newAdmin.password);

    const createdUser = await newAdmin.newAdminSignUp();

    return res.status(201).json({
      status: 201,
      message: 'Admin created',
      data: createdUser,
    });
  },

  async loginAdmin(req, res) {
    const {
      email,
      password,
    } = req.body;

    const isExistingAdminMail = await AdminModel.findAdminByEmail(email);
    if (!isExistingAdminMail) {
      return res.status(404).json({
        status: 404,
        error: 'The credentials you provided is incorrect',
      });
    }

    if (!bcrypt.comparePassword(isExistingAdminMail.password, password)) {
      return res.status(404).json({
        status: 404,
        error: 'The credentials you provided is incorrect',
      });
    }

    const tokenData = {
      id: isExistingAdminMail.id,
      username: isExistingAdminMail.username,
      admin: isExistingAdminMail.admin,
    };

    const token = await jwt.generateToken(tokenData);
    return res.status(200).send({
      status: 200,
      message: 'You are logged in as an admin',
      token,
    });
  },
};

export default AdminController;