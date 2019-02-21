/* eslint-disable prefer-const */
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
    req.body.userId = id;

    const question = new Question(req.body);

    const meetupExists = await Meetup.retrieveSingleMeetup(question.meetupId);
    if (!meetupExists) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    const newQuestion = await question.post();
    return successResponse(res, 201, 'Question created', newQuestion);
  },

  async getQuestion(req, res) {
    const {
      id,
    } = req.params;
    const questionExists = await Question.getById(id);
    if (!questionExists) return errorResponse(res, 404, 'Question not found.');
    return successResponse(res, 200, 'Question retrieved', questionExists);
  },

  async upvote(req, res) {
    const questionId = req.params.id;
    const userId = req.user.id;

    const questionExists = await Question.getById(questionId);
    if (!questionExists) return errorResponse(res, 404, 'Question not found.');

    if (questionExists.user_id === userId) {
      return errorResponse(res, 400, 'You can not vote on your own question.');
    }

    const vote = 'upvoted';
    let voted = await Question.ifVoted(userId, questionId);

    if (voted && voted.vote === 'downvoted') {
      await Question.updateVoteStatus(questionId);
      await Question.balaceDownvote(questionId);
      const result = await Question.upvote(questionId);
      return successResponse(res, 200, `Question ${vote}.`, result);
    }

    if (voted && voted.vote === 'upvoted') {
      await Question.balanceUpvoteRecord(questionId);
      await Question.deleteVoteRecord(userId, questionId);
      return successResponse(res, 200, 'Question unvoted', null);
    }


    const result = await Question.upvote(questionId);
    await Question.createVoteRecord(userId, questionId, vote);
    return successResponse(res, 200, `Question ${vote}.`, result);
  },

  async downvote(req, res) {
    const questionId = req.params.id;
    const userId = req.user.id;


    const questionExists = await Question.getById(questionId);
    if (!questionExists) return errorResponse(res, 404, 'Question not found.');

    if (questionExists.user_id === userId) {
      return errorResponse(res, 400, 'You can not vote on your own question.');
    }

    const vote = 'downvoted';
    const voted = await Question.ifVoted(userId, questionId);

    if (voted && voted.vote === 'upvoted') {
      await Question.updateVoteStatus(questionId);
      await Question.balanceUpvoteRecord(questionId);
      const result = await Question.downvote(questionId);
      return successResponse(res, 200, `Question ${vote}.`, result);
    }

    if (voted && voted.vote === 'downvoted') {
      await Question.balanceDownvoteRecord(questionId);
      await Question.deleteVoteRecord(userId, questionId);
      return successResponse(res, 200, 'Question unvoted', null);
    }

    const result = await Question.downvote(questionId);
    await Question.createVoteRecord(userId, questionId, vote);
    return successResponse(res, 200, `Question ${vote}.`, result);
  },

  async meetupQuestions(req, res) {
    const {
      id,
    } = req.params;

    const retrievedMeetup = await Meetup.retrieveSingleMeetup(id);

    if (!retrievedMeetup) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    const questions = await Question.getQuestionByMeetup(id);

    if (questions.length === 0) {
      return successResponse(res, 200, 'No questions for this meetup', []);
    }

    return successResponse(res, 200, 'All available questions for this meetup', questions);
  },
};