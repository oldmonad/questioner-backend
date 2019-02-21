import express from 'express';

import Comments from '../controller/comments';
import tryCatch from '../utilities/trycatch';
import validate from '../middleware/validatecomment';
import Auth from '../middleware/Auth';

const router = express.Router();


router.post('/', Auth.verifyToken, validate.validComment, tryCatch(Comments.createComment));

export default router;
