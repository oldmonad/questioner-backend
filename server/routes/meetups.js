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

router.post('/', Auth.verifyToken, Auth.adminAuth, meetupValidation.validCreateMeetup, meetupValidation.checkDate, meetupController.createMeetup);
router.get('/upcoming/', Auth.verifyToken, meetupController.getUpcomingMeetups);
router.get('/:id', Auth.verifyToken, meetupController.getSingleMeetup);
router.get('/', Auth.verifyToken, meetupController.getAllMeetups);
router.patch('/:meetupId/rsvps', Auth.verifyToken, rsvpController.respondToRsvp);
router.delete('/:id', Auth.verifyToken, Auth.adminAuth, meetupController.deleteMeetup);

export default router;