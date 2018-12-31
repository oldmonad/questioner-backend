/* eslint-disable eol-last */
import Storage from '../models/jsDataStorage';

const meetupController = {

  create(req, res) {
    const meetup = Storage.create(req.body);
    const response = {
      id: meetup.id,
      topic: meetup.topic,
      location: meetup.location,
      date: meetup.date,
      tags: meetup.tags,
    };
    res.status(201).json({
      status: 201,
      data: [response],
    });
  },
};

export default meetupController;