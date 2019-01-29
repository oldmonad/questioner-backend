/* eslint-disable radix */
/* eslint-disable eol-last */
import MeetupModels from '../models/meetup';
import RsvpModels from '../models/rsvp';
import {
  errorResponse,
  successResponse,
} from '../utilities/responseformat';

const rsvpController = {
  async respondToRsvp(req, res) {
    const meetupId = req.params.id;
    const userId = req.user.id;
    const {
      response,
    } = req.body;

    const checkForMeetup = await MeetupModels.retrieveSingleMeetup(meetupId);

    if (!checkForMeetup) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    const responseInstance = new RsvpModels(req.body);
    const newResponseData = await responseInstance.responseToMeetup(meetupId, userId);
    if (response === 'yes') {
      return successResponse(res, 200, 'You are scheduled to attend this meetup', newResponseData);
    }
    return successResponse(res, 200, 'Your response has been recorded', null);
  },

  async getJoinedMeetups(req, res) {
    const {
      id,
    } = req.user;
    const response = 'yes';
    const result = await RsvpModels.userResponses(id, response);
    if (result.length === 0) return errorResponse(res, 404, 'You have not joined any meetups yet.');
    return successResponse(res, 200, 'Joined meetups found.', result);
  },
};

export default rsvpController;