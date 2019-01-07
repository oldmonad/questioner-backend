/* eslint-disable radix */
/* eslint-disable eol-last */
import Storage from '../models/storage';

const rsvpController = {
  respond(req, res) {
    const meetup = parseInt(req.params.meetupId);
    const currentStatus = req.body.status;
    const rsvps = Storage.rsvp(meetup, currentStatus);
    res.status(200).json({
      message: 'Hitting rsvp route',
      data: [rsvps],
    });
  },
};

export default rsvpController;