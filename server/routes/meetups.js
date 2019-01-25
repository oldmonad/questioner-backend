/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable eol-last */
/* eslint-disable import/first */
import express from 'express';

const router = express.Router();


import meetupController from '../controller/meetups';
import rsvpController from '../controller/rsvp';
import Auth from '../middleware/Auth';
import meetupValidation from '../middleware/validatemeetups';
import tryCatch from '../utilities/trycatch';
import validateId from '../middleware/validateid';

router.post('/', Auth.adminAuth, meetupValidation.validCreateMeetup, meetupValidation.checkDate, tryCatch(meetupController.createMeetup));
router.get('/upcoming/', tryCatch(meetupController.getUpcomingMeetups));
router.get('/:id', validateId, tryCatch(meetupController.getSingleMeetup));
router.get('/', tryCatch(meetupController.getAllMeetups));

router.patch('/:id/rsvps', validateId, tryCatch(rsvpController.respondToRsvp));

router.delete('/:id', Auth.adminAuth, validateId, tryCatch(meetupController.deleteMeetup));

export default router;