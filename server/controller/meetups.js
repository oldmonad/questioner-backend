/* eslint-disable eol-last */
import MeetupModels from '../models/meetup';
import {
  errorResponse,
  successResponse,
} from '../utilities/responseformat';


const MeetupController = {

  async createMeetup(req, res) {
    const meetupData = new MeetupModels(req.body);
    const createdMeetup = await meetupData.createMeetup();
    return successResponse(res, 201, 'Meetup created', createdMeetup);
  },

  async getAllMeetups(req, res) {
    const allMeetups = await MeetupModels.retrieveAllMeetups();

    if (allMeetups.length === 0) {
      return errorResponse(res, 204, 'Empty Resource');
    }

    return successResponse(res, 200, 'All available meetups', allMeetups);
  },

  async getSingleMeetup(req, res) {
    const {
      id,
    } = req.params;
    const retrievedMeetup = await MeetupModels.retrieveSingleMeetup(id);

    if (!retrievedMeetup) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    return successResponse(res, 200, 'Meetup Found', retrievedMeetup);
  },

  async getUpcomingMeetups(req, res) {
    const currentDate = new Date(Date.now());

    const upcomingMeetups = await MeetupModels.retrieveUpcomingMeetups(currentDate);

    if (upcomingMeetups.length === 0) {
      return errorResponse(res, 404, 'No upcoming meetups');
    }

    return successResponse(res, 200, 'These are the upcoming meetups', upcomingMeetups);
  },


  // async deleteMeetup(req, res) {
  //   const {
  //     id,
  //   } = req.params;
  //   const meetup = await MeetupModels.retrieveSingleMeetup(id);
  // },
};


export default MeetupController;