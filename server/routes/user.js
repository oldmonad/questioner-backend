/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import User from '../controller/user';
import tryCatch from '../utilities/trycatch';
import userValidation from '../middleware/validateuser';

router.post('/signup', userValidation.validateSignUp, tryCatch(User.createNewUser));
router.post('/login', userValidation.validateLogin, tryCatch(User.loginUser));


export default router;