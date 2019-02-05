/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import questionsController from '../controller/questions';
import validate from '../middleware/validatequestion';
import commentsController from '../controller/comments';
import tryCatch from '../utilities/trycatch';


router.post('/', validate.validateQuestion, tryCatch(questionsController.createQuestion));
router.get('/:id', tryCatch(questionsController.getQuestion));
router.patch('/:id/upvote', tryCatch(questionsController.upvote));
router.patch('/:id/downvote', tryCatch(questionsController.downvote));
router.get('/:id/comments', tryCatch(commentsController.getByQuestion));

export default router;