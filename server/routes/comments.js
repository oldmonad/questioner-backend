/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import Comments from '../controller/comments';
import tryCatch from '../utilities/trycatch';

// router.post('/auth/signup', tryCatch(Comments.createComment));

export default router;