/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import User from '../controller/user';

router.post('/auth/signup', User.createNewUser);

router.post('/auth/login', User.loginUser);


export default router;