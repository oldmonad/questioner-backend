/* eslint-disable radix */
/* eslint-disable eol-last */
import Storage from '../models/storage';

const questionController = {
  create(req, res) {
    const meetupId = req.body.meetup;
    const data = req.body;
    const createdQuestion = Storage.question(meetupId, data);
    return res.status(201).json({
      status: 201,
      data: createdQuestion,
    });
  },
};

export default questionController;