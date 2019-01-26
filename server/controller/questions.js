/* eslint-disable eol-last */
import QuestionModel from '../models/question';
import MeetupModel from '../models/meetup';
import {
  errorResponse,
  successResponse,
} from '../utilities/responseformat';

export default {
  async createQuestion(req, res) {
    const {
      id,
    } = req.user;
    req.body.userId = id;

    const question = new QuestionModel(req.body);

    const meetupExists = await MeetupModel.retrieveSingleMeetup(question.meetupId);
    if (!meetupExists) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    const newQuestion = await question.postQuestion();
    return successResponse(res, 201, 'Question created', newQuestion);
  },

  async upvote(req, res) {
    const questionId = req.params.id;
    const userId = req.user.id;
    const userAction = req.originalUrl;

    const questionExists = await QuestionModel.getQuestionById(questionId);
    if (!questionExists) return errorResponse(res, 404, 'Question not found.');

    if (questionExists.user_id === userId) {
      return errorResponse(res, 400, 'You can not vote on your own question.');
    }

    const voted = await QuestionModel.ifVoted(userId, questionId);

    if (voted) {
      return errorResponse(res, 400, `You have already ${voted.vote} this question`);
    }

    const userActionArray = userAction.split('/');
    const vote = `${userActionArray[userActionArray.length - 1]}d`;
    const result = await QuestionModel.upvoteQuestion(questionId);
    await QuestionModel.updateVotesTable(userId, questionId, vote);
    return successResponse(res, 200, `Question ${vote}.`, result);
  },

  async downvote(req, res) {
    const questionId = req.params.id;
    const userId = req.user.id;
    const userAction = req.originalUrl;

    const questionExists = await QuestionModel.getQuestionById(questionId);
    if (!questionExists) return errorResponse(res, 404, 'Question not found.');

    if (questionExists.user_id === userId) {
      return errorResponse(res, 400, 'You can not vote on your own question.');
    }

    const voted = await QuestionModel.ifVoted(userId, questionId);

    if (voted) {
      return errorResponse(res, 400, `You have already ${voted.vote} this question`);
    }

    const userActionArray = userAction.split('/');
    const vote = `${userActionArray[userActionArray.length - 1]}d`;
    const result = await QuestionModel.downvoteQuestion(questionId);
    await QuestionModel.updateVotesTable(userId, questionId, vote);
    return successResponse(res, 200, `Question ${vote}.`, result);
  },
};