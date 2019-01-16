/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';
import validate from 'express-validation';

const router = express.Router();

import questionsController from '../controller/questions';
import voteController from '../controller/vote';
import validations from '../middleware/validator/validator';
import Auth from '../middleware/Auth';


// router.post('/', validate(validations.postQuestion), questionsController.create);
// router.patch('/:questionId/upvote', voteController.upvote);
// router.patch('/:questionId/downvote', voteController.downvote);

export default router;