/* eslint-disable radix */
/* eslint-disable eol-last */
import Storage from '../models/storage';

const rsvpController = {
  respond(req, res) {
    const meetup = parseInt(req.params.meetupId);
    const {
      status,
    } = req.body;
    const rsvp = Storage.rsvp(meetup, status);
    const specificMeetup = Storage.findOne(meetup);
    const response = {
      meetup: specificMeetup.meetupId,
      topic: specificMeetup.topic,
      rsvp,
    };
    res.status(200).json({
      status: 200,
      data: [response],
    });
  },
};

export default rsvpController;