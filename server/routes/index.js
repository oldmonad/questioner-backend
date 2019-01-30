/* eslint-disable eol-last */
import {
  Router,
} from 'express';
import userRoutes from './user';
import meetupRoutes from './meetups';
import questionsRoute from './questions';
import commentRoutes from './comments';
import Auth from '../middleware/Auth';

const router = new Router();

router.use('/auth', userRoutes);
router.use('/meetups', Auth.verifyToken, meetupRoutes);
router.use('/questions', Auth.verifyToken, questionsRoute);
router.use('/comments', Auth.verifyToken, commentRoutes);

export default router;