/* eslint-disable eol-last */
// import CommentsModel from '../models/comments';
import QuestionModel from '../models/question';
import CommentsModel from '../models/comments';
import {
  errorResponse,
  successResponse,
} from '../utilities/responseformat';


const commentsController = {

  async createComment(req, res) {
    const newComment = req.body;

    const checkquestion = await QuestionModel.getQuestionById(newComment.questionId);

    if (!checkquestion) {
      return errorResponse(res, 404, 'Question does not exist');
    }

    newComment.title = checkquestion.title;
    newComment.body = checkquestion.body;
    newComment.userId = req.user.id;
    newComment.comment = newComment.comment.replace(/[^A-Z0-9]/ig, '');
    console.log(newComment.userId);


    const latestComment = new CommentsModel(newComment);
    const createdComment = await latestComment.createComment();
    return successResponse(res, 201, 'Comment posted', createdComment);
  },
};

export default commentsController;