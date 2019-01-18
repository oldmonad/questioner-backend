/* eslint-disable eol-last */
// import CommentsModel from '../models/comments';
// import QuestionModel from '../models/question';
// const commentsController = {
//   async createComment(req, res) {
//     const comment = req.body;
//     const checkquestion = await QuestionModel.getcommentById(comment.commentId);
//     if (!checkquestion) {
//       res.status(404).json({
//         status: 404,
//         error: 'comment does not exist',
//       });
//       comment.title = checkquestion.title;
//       comment.body = checkquestion.body;
//       comment.userid = req.user.id;
//       const newComment = new CommentsModel(comment);
//       const createdComment = await CommentsModel.createComment(newComment);
//     }
//   },
// };
"use strict";
//# sourceMappingURL=comments.js.map