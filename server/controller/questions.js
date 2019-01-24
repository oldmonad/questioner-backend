/* eslint-disable eol-last */
import Question from '../models/question';
import Meetup from '../models/meetup';
import {
  errorResponse,
  successResponse,
} from '../utilities/responseformat';

export default {
  async createQuestion(req, res) {
    const {
      id,
    } = req.user;
    req.body.userid = id;

    const question = new Question(req.body);

    const meetupExists = await Meetup.retrieveSingleMeetup(question.meetupid);
    if (!meetupExists) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    const newQuestion = await question.postQuestion();
    return successResponse(res, 201, 'Question created', newQuestion);
  },
};