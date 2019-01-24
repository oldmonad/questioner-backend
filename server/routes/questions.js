/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import questionsController from '../controller/questions';
// import voteController from '../controller/vote';
import validate from '../middleware/validatequestion';
import tryCatch from '../utilities/trycatch';


router.post('/', validate.validateQuestion, tryCatch(questionsController.createQuestion));
// router.patch('/:questionId/upvote', Auth.verifyToken, voteController.upvote);
// router.patch('/:questionId/downvote', Auth.verifyToken, voteController.downvote);

export default router;