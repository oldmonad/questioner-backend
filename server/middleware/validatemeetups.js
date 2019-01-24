/* eslint-disable eol-last */
import Validator from 'validatorjs';
import {
  errorResponse,
} from '../utilities/responseformat';
import customErrorMessages from '../utilities/errorresponses';

export default class MeetupValidation {
  static validCreateMeetup(req, res, next) {
    const meetup = req.body;

    const meetupProperties = {
      topic: 'required|string|min:1|max:255',
      location: 'required|string|min:1',
      happeningon: ['required', 'date', 'regex:/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/'],
      images: 'url',
    };

    const validator = new Validator(meetup, meetupProperties, customErrorMessages);
    validator.passes(() => next());
    validator.fails(() => {
      const errors = validator.errors.all();
      return errorResponse(res, 400, errors);
    });
  }

  static checkDate(req, res, next) {
    const {
      happeningon,
    } = req.body;
    const currentDate = new Date(Date.now());
    const meetupDate = new Date(happeningon);

    if (currentDate > meetupDate) {
      return errorResponse(res, 400, `Your Date should be greater than ${currentDate}.`);
    }
    return next();
  }
}