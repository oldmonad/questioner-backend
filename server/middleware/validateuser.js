/* eslint-disable eol-last */
import Validator from 'validatorjs';
import {
  errorResponse,
} from '../utilities/responseformat';
import customErrorMessages from '../utilities/errorresponses';

export default class UserValidation {
  static validateSignUp(req, res, next) {
    const user = req.body;

    const userProperties = {
      firstname: 'required|alpha|min:2|max:50',
      lastname: 'required|alpha|min:2|max:50',
      username: 'required|alpha_num|min:5|max:50',
      email: 'required|email|max:100',
      password: 'required|alpha_num|min:6|max:18',
      confirmPassword: 'required_with:password',
      phonenumber: 'required|digits:11',
    };

    const validator = new Validator(user, userProperties, customErrorMessages);
    validator.passes(() => next());
    validator.fails(() => {
      const errors = validator.errors.all();
      return errorResponse(res, 400, errors);
    });
  }

  static validateLogin(req, res, next) {
    const user = req.body;

    const userProperties = {
      email: 'required|email|max:100',
      password: 'required|alpha_num|min:6|max:18',
    };

    const validator = new Validator(user, userProperties, customErrorMessages);
    validator.passes(() => next());
    validator.fails(() => {
      const errors = validator.errors.all();
      return errorResponse(res, 400, errors);
    });
  }
}