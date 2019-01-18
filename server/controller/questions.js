/* eslint-disable eol-last */
import Question from '../models/question';
import Meetup from '../models/meetup';

export default {
  async createQuestion(req, res) {
    const {
      id,
    } = req.user;
    req.body.userid = id;

    const question = new Question(req.body);

    const meetupExists = await Meetup.retrieveSingleMeetup(question.meetupid);
    if (!meetupExists) {
      return res.status(404).json({
        status: 404,
        error: 'Meetup not found',
      });
    }

    const newQuestion = await question.postQuestion();
    return res.status(201).json({
      status: 201,
      message: 'Question created',
      data: [newQuestion],
    });
  },
};