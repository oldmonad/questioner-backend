/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import questionsController from '../controller/questions';
// import voteController from '../controller/vote';
import Auth from '../middleware/Auth';
import validate from '../middleware/validatequestion';


router.post('/', Auth.verifyToken, validate.validateQuestion, questionsController.createQuestion);
// router.patch('/:questionId/upvote', Auth.verifyToken, voteController.upvote);
// router.patch('/:questionId/downvote', Auth.verifyToken, voteController.downvote);

export default router;