/* eslint-disable radix */
/* eslint-disable eol-last */


const meetupController = {

  async create(req, res) {
    const content = req.body;
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

  async getOne(req, res) {
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

  async getAll(req, res) {
    const meetups = Storage.findAll();
    if (meetups.length === 0) {
      return res.status(204).json({
        status: 204,
        message: 'You have not created any meetup',
      });
    }
    return res.status(200).json({
      status: 200,
      data: meetups,
    });
  },

  async getUpcoming(req, res) {
    const upcoming = Storage.findUpcoming();
    if (upcoming.length === 0) {
      return res.status(204).json({
        status: 204,
        message: 'You have not created any meetup',
      });
    }
    return res.status(200).json({
      status: 200,
      data: upcoming,
    });
  },
};

export default meetupController;