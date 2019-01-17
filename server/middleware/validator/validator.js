/* eslint-disable eol-last */
import Joi from 'joi';

export default {

  createMeetup: {
    body: {
      topic: Joi.string().required(),
      location: Joi.string().required(),
      date: Joi.date().required(),
      tags: Joi.string(),
    },
  },

  getMeetup: {
    params: {
      meetupId: Joi.number().required(),
    },
  },


  postQuestion: {
    body: {
      meetupid: Joi.number().required(),
      title: Joi.string().required(),
      body: Joi.string().required(),
    },
  },

  rsvps: {
    body: {
      meetupId: Joi.number().required(),
      rsvps: Joi.string().valid(
        'yes',
        'no',
        'maybe',
      ).required(),
    },
  },
};