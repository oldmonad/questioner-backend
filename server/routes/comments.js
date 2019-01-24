/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import Comments from '../controller/comments';

router.post('/auth/signup', Comments.createComment);
// router.post('/auth/login', Admin.loginAdmin);

export default router;