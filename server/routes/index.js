/* eslint-disable eol-last */
import {
  Router,
} from 'express';
import userRoutes from './user';
import meetupRoutes from './meetups';
import questionsRoute from './questions';
// import commentRoutes from './routes/comments';

const router = new Router();

router.use('/auth', userRoutes);
router.use('/meetups', meetupRoutes);
router.use('/questions', questionsRoute);

export default router;