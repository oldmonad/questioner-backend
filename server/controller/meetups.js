/* eslint-disable eol-last */
import MeetupModels from '../models/meetup';


const MeetupController = {

  async createMeetup(req, res) {
    const {
      topic,
      location,
      date,
      image,
      tags,
    } = req.body;

    const formatedTags = tags.trim().split('');

    const newMeetUp = {
      topic,
      location,
      date,
      image,
      formatedTags,
    };

    const meetupData = new MeetupModels(newMeetUp);
    const createdMeetup = await meetupData.createMeetup();
    res.status(201).json({
      status: 201,
      message: 'Meetup created',
      data: createdMeetup,
    });
  },

};


export default MeetupController;