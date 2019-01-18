/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';
import validate from 'express-validation';

const router = express.Router();

import questionsController from '../controller/questions';
// import voteController from '../controller/vote';
import validations from '../middleware/validator/validator';
import Auth from '../middleware/Auth';


router.post('/', Auth.verifyToken, validate(validations.postQuestion), questionsController.createQuestion);
// router.patch('/:questionId/upvote', Auth.verifyToken, voteController.upvote);
// router.patch('/:questionId/downvote', Auth.verifyToken, voteController.downvote);

export default router;