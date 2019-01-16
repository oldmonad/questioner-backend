/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';
import validate from 'express-validation';

const router = express.Router();

import meetupController from '../controller/meetups';
import rsvpController from '../controller/rsvp';
import validations from '../middleware/validator/validator';
import Auth from '../middleware/Auth';

// router.post('/', validate(validations.createMeetup), meetupController.create);
// router.get('/upcoming/', meetupController.getUpcoming);
// router.get('/:meetupId', validate(validations.getMeetup), meetupController.getOne);
// router.get('/', meetupController.getAll);
// router.patch('/:meetupId/rsvps', rsvpController.respond);

export default router;