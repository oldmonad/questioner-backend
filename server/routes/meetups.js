/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';
import validate from 'express-validation';

const router = express.Router();

import meetupController from '../controller/meetups';
import rsvpController from '../controller/rsvp';
import validations from '../middleware/validator/validator';
import Auth from '../middleware/Auth';

router.post('/', Auth.verifyToken, Auth.adminAuth, validate(validations.createMeetup), meetupController.createMeetup);
router.get('/upcoming/', Auth.verifyToken, meetupController.getUpcomingMeetups);
router.get('/:meetupId', Auth.verifyToken, validate(validations.getMeetup), meetupController.getUpcomingMeetups);
router.get('/', Auth.verifyToken, meetupController.getAllMeetups);
router.patch('/:meetupId/rsvps', Auth.verifyToken, validate(validations.rsvps), rsvpController.respondToRsvp);

export default router;