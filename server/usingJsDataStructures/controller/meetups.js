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
    const content = req.body;
    // console.log(content);
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
    };
    return res.status(201).json({
      status: 201,
      data: [response],
    });
  },

  // getAll(req, res) {
  //   const meetups = Storage.findAll();

  //   return res.status(200).json({
  //     status: 200,
  //     data: meetups,
  //   });
  // },

  getOne(req, res) {
    const meetup = Storage.findOne(req.params.meetupId);
    console.log(meetup);
    // if (!meetup) {
    //   return res.status(404).json({
    //     message: 'meetup not found',
    //   });
    // }
    return res.status(200).json({
      data: meetup,
    });
  },
};

export default meetupController;