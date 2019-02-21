import express from 'express';

import questionsController from '../controller/questions';
import validate from '../middleware/validatequestion';
import commentsController from '../controller/comments';
import tryCatch from '../utilities/trycatch';
import validateId from '../middleware/validateid';
import Auth from '../middleware/Auth';

const router = express.Router();


router.post('/', Auth.verifyToken, validate.validateQuestion, tryCatch(questionsController.createQuestion));
router.get('/:id', validateId, tryCatch(questionsController.getQuestion));
router.patch('/:id/upvote', Auth.verifyToken, validateId, tryCatch(questionsController.upvote));
router.patch('/:id/downvote', Auth.verifyToken, validateId, tryCatch(questionsController.downvote));
router.get('/:id/comments', validateId, tryCatch(commentsController.getByQuestion));

export default router;
