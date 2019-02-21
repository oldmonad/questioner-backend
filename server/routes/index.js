import {
  Router,
} from 'express';
import userRoutes from './user';
import meetupRoutes from './meetups';
import questionsRoute from './questions';
import commentRoutes from './comments';

const router = new Router();

router.use('/auth', userRoutes);
router.use('/meetups', meetupRoutes);
router.use('/questions', questionsRoute);
router.use('/comments', commentRoutes);

export default router;
