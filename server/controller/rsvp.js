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
    console.log(checkForMeetup);
    if (!checkForMeetup) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    const responseInstance = new RsvpModels(req.body);
    const newResponseData = await responseInstance.responseToMeetup(meetupId, userId);
    if (response === 'yes') {
      return successResponse(res, 200, 'You ', newResponseData);
    }
    return successResponse(res, 200, 'Your response as been recorded', null);
  },
};

export default rsvpController;