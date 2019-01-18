/* eslint-disable radix */
/* eslint-disable eol-last */
import MeetupModels from '../models/meetup';
import RsvpModels from '../models/rsvp';

const rsvpController = {
  async respondToRsvp(req, res) {
    const meetupId = req.params.id;
    const userId = req.user.id;
    const {
      response,
    } = req.body;

    const checkForMeetup = await MeetupModels.retrieveSingleMeetup(meetupId);
    if (!checkForMeetup) {
      res.status(404).json({
        status: 404,
        error: 'Meetup not found',
      });
    }

    const responseInstance = new RsvpModels(req.body);
    const newResponseData = await responseInstance.responseToMeetup(meetupId, userId);
    if (response === 'yes') {
      res.status(200).json({
        status: 200,
        message: 'You have registered for this meetup',
        data: newResponseData,
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Your response has been recorded',
    });
  },
};

export default rsvpController;