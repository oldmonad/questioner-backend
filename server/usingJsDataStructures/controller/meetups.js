/* eslint-disable eol-last */
import Storage from '../models/jsDataStorage';

const meetupController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} meetup object,
   */
  create(req, res) {
    const meetup = Storage.create(req.body);
    const response = {
      id: meetup.id,
      topic: meetup.topic,
      location: meetup.location,
      date: meetup.date,
      tags: meetup.tags,
    };
    return res.status(201).json({
      status: 201,
      data: [response],
    });
  },
};

export default meetupController;