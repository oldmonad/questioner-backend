/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import Comments from '../controller/comments';
import Auth from '../middleware/Auth';
import tryCatch from '../utilities/trycatch';
import validate from '../middleware/validatecomment';

router.post('/', Auth.verifyToken, validate.validComment, tryCatch(Comments.createComment));

export default router;