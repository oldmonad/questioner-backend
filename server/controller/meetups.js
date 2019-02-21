/* eslint-disable eol-last */
import MeetupModels from '../models/meetup';
import QuestionModels from '../models/question';
import {
  errorResponse,
  successResponse,
} from '../utilities/responseformat';


const MeetupController = {

  async createMeetup(req, res) {
    const { topic, location, happeningOn } = req.body;
    const { id } = req.user;
    const meetupCredential = {
      topic,
      location,
      happeningOn,
      id,
    };

    const meetupData = new MeetupModels(meetupCredential);
    const createdMeetup = await meetupData.createMeetup();
    return successResponse(res, 201, 'Meetup created', createdMeetup);
  },

  async getAllMeetups(req, res) {
    const allMeetups = await MeetupModels.retrieveAllMeetups();

    if (allMeetups.length === 0) {
      return errorResponse(res, 404, 'Empty Resource');
    }

    return successResponse(res, 200, 'All available meetups', allMeetups);
  },

  async getSingleMeetup(req, res) {
    const {
      id,
    } = req.params;
    const retrievedMeetup = await MeetupModels.retrieveSingleMeetup(id);
    const getMeetupQuestions = await QuestionModels.getQuestionByMeetup(id);

    if (!retrievedMeetup) {
      return errorResponse(res, 404, 'Meetup not found');
    }

    retrievedMeetup.questions = getMeetupQuestions;

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


  async deleteMeetup(req, res) {
    const {
      id,
    } = req.params;
    const meetup = await MeetupModels.retrieveSingleMeetup(id);

    if (!meetup) return errorResponse(res, 404, 'Meetup not found.');
    await MeetupModels.deleteMeetup(id);
    return successResponse(res, 200, 'Meetup deleted successfully.', null);
  },
};


export default MeetupController;