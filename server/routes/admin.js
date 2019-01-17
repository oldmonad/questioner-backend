/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();

import Admin from '../controller/admin';

router.post('/auth/signup', Admin.createnewAdmin);
router.post('/auth/login', Admin.loginAdmin);

export default router;