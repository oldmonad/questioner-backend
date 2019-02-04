/* eslint-disable eol-last */
import Validator from 'validatorjs';
import {
  errorResponse,
} from '../utilities/responseformat';
import customErrorMessages from '../utilities/errorresponses';

export default class QuestionValidation {
  static validateQuestion(req, res, next) {
    const question = req.body;

    const questionProperties = {
      meetupId: 'required|numeric',
      // title: 'required|string|max:200',
      body: 'required|string|max:500',
    };

    const validator = new Validator(question, questionProperties, customErrorMessages);
    validator.passes(() => next());
    validator.fails(() => {
      const errors = validator.errors.all();
      return errorResponse(res, 400, errors);
    });
  }
}