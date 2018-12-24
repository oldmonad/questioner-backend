import express from 'express';

import meetups from '../controller/meetupController';

const router = express.Router();

router.post('/', meetups.create);


export default router;
