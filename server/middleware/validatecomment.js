/* eslint-disable eol-last */
import Validator from 'validatorjs';
import {
  errorResponse,
} from '../utilities/responseformat';
import customErrorMessages from '../utilities/errorresponses';


export default class CommentValidation {
  static validComment(req, res, next) {
    const comments = req.body;

    const commentProperties = {
      questionId: 'required|numeric',
      comment: 'required|string|max:500',
    };

    const validator = new Validator(comments, commentProperties, customErrorMessages);
    validator.passes(() => next());
    validator.fails(() => {
      const errors = validator.errors.all();
      return errorResponse(res, 400, errors);
    });
  }
}