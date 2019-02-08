/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import questionsController from '../controller/questions';
import validate from '../middleware/validatequestion';
import commentsController from '../controller/comments';
import tryCatch from '../utilities/trycatch';
import validateId from '../middleware/validateid';


router.post('/', validate.validateQuestion, tryCatch(questionsController.createQuestion));
router.get('/:id', validateId, tryCatch(questionsController.getQuestion));
router.patch('/:id/upvote', validateId, tryCatch(questionsController.upvote));
router.patch('/:id/downvote', validateId, tryCatch(questionsController.downvote));
router.get('/:id/comments', validateId, tryCatch(commentsController.getByQuestion));

export default router;