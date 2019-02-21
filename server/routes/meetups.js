import express from 'express';


import meetupController from '../controller/meetups';
import rsvpController from '../controller/rsvp';
import Auth from '../middleware/Auth';
import meetupValidation from '../middleware/validatemeetups';
import questionsController from '../controller/questions';
import tryCatch from '../utilities/trycatch';
import validateId from '../middleware/validateid';
import validateRsvp from '../middleware/validatersvps';


const router = express.Router();

router.post('/', Auth.verifyToken, Auth.adminAuth, meetupValidation.validCreateMeetup, meetupValidation.checkDate, tryCatch(meetupController.createMeetup));
router.get('/:id/questions', validateId, tryCatch(questionsController.meetupQuestions));
router.get('/upcoming/', tryCatch(meetupController.getUpcomingMeetups));
router.get('/:id', validateId, tryCatch(meetupController.getSingleMeetup));
router.get('/', tryCatch(meetupController.getAllMeetups));
router.patch('/:id/rsvps', Auth.verifyToken, validateId, validateRsvp.validRsvp, tryCatch(rsvpController.respondToRsvp));
router.delete('/:id', Auth.verifyToken, Auth.adminAuth, validateId, tryCatch(meetupController.deleteMeetup));


export default router;
