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

  async getAllMeetups(req, res) {
    const allMeetups = await MeetupModels.retrieveAllMeetups();

    if (allMeetups.length === 0) {
      res.status(204).json({
        status: 204,
        error: 'Empty resource',
      });
    }

    return res.status(200).json({
      status: 200,
      data: allMeetups,
    });
  },

  async getSingleMeetup(req, res) {
    const {
      id,
    } = req.params;
    const retrievedMeetup = await MeetupModels.retrieveSingleMeetup(id);

    if (!retrievedMeetup) {
      res.status(404).json({
        status: 404,
        error: 'Meetup not found',
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'Meetup Found!',
      data: retrievedMeetup,
    });
  },

  async getUpcomingMeetups(req, res) {
    const currentDate = new Date(Date.now() / 1000) + 39;

    const upcomingMeetups = await MeetupModels.retrieveUpcomingMeetups(currentDate);

    if (upcomingMeetups.length === 0) {
      return res.status(404).json({
        status: 404,
        err0r: 'No upcoming meetups found',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'These are pending meetups',
      data: upcomingMeetups,
    });
  },

};


export default MeetupController;