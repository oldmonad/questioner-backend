/* eslint-disable eol-last */
// import Comments from '../models/comments';
import Question from '../models/question';
import Comments from '../models/comments';
import {
  errorResponse,
  successResponse,
} from '../utilities/responseformat';


const commentsController = {

  async createComment(req, res) {
    const newComment = req.body;

    const checkquestion = await Question.getById(newComment.questionId);

    if (!checkquestion) {
      return errorResponse(res, 404, 'Question does not exist');
    }

    newComment.userId = req.user.id;
    newComment.comment = newComment.comment.replace(/[^A-Z0-9]/ig, '');

    const latestComment = new Comments(newComment);
    const createdComment = await latestComment.createComment();
    return successResponse(res, 201, 'Comment posted', createdComment);
  },
};

export default commentsController;