/* eslint-disable radix */
/* eslint-disable eol-last */
import Storage from '../models/storage';

const meetupController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} meetup object,
   */
  create(req, res) {
    const content = req.body;
    if (!content.topic || !content.location || !content.date || !content.tags) {
      res.status(400).json({
        message: 'Al fields are required',
      });
    }
    const meetup = Storage.create(content);
    const response = {
      meetupId: meetup.meetupId,
      topic: meetup.topic,
      location: meetup.location,
      date: meetup.date,
      tags: meetup.tags,
      questions: meetup.questions,
    };
    return res.status(201).json({
      status: 201,
      data: [response],
    });
  },

  getOne(req, res) {
    const id = parseInt(req.params.meetupId);
    const meetup = Storage.findOne(id);
    if (!meetup) {
      return res.status(404).json({
        message: 'meetup not found',
      });
    }
    const response = {
      meetupId: meetup.meetupId,
      topic: meetup.topic,
      location: meetup.location,
      date: meetup.date,
      tags: meetup.tags,
    };
    return res.status(200).json({
      status: 200,
      data: [response],
    });
  },

  getAll(req, res) {
    const meetups = Storage.findAll();
    if (meetups.length === 0) {
      return res.status(404).json({
        message: 'You have not created any meetup',
      });
    }
    return res.status(201).json({
      status: 201,
      data: meetups,
    });
  },

  getUpcoming(req, res) {
    const upcoming = Storage.findUpcoming();
    res.status(200).json({
      status: 200,
      data: upcoming,
    });
  },
};

export default meetupController;