"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storage = _interopRequireDefault(require("../models/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable radix */

/* eslint-disable eol-last */
var meetupController = {
  create: function create(req, res) {
    var content = req.body;

    var meetup = _storage.default.create(content);

    var response = {
      meetupId: meetup.meetupId,
      topic: meetup.topic,
      location: meetup.location,
      date: meetup.date,
      tags: meetup.tags,
      questions: meetup.questions
    };
    return res.status(201).json({
      status: 201,
      data: [response]
    });
  },
  getOne: function getOne(req, res) {
    var id = parseInt(req.params.meetupId);

    var meetup = _storage.default.findOne(id);

    if (!meetup) {
      return res.status(404).json({
        message: 'meetup not found'
      });
    }

    var response = {
      meetupId: meetup.meetupId,
      topic: meetup.topic,
      location: meetup.location,
      date: meetup.date,
      tags: meetup.tags
    };
    return res.status(200).json({
      status: 200,
      data: [response]
    });
  },
  getAll: function getAll(req, res) {
    var meetups = _storage.default.findAll();

    if (meetups.length === 0) {
      return res.status(204).json({
        status: 204,
        message: 'You have not created any meetup'
      });
    }

    return res.status(200).json({
      status: 200,
      data: meetups
    });
  },
  getUpcoming: function getUpcoming(req, res) {
    var upcoming = _storage.default.findUpcoming();

    if (upcoming.length === 0) {
      return res.status(204).json({
        status: 204,
        message: 'You have not created any meetup'
      });
    }

    return res.status(200).json({
      status: 200,
      data: upcoming
    });
  }
};
var _default = meetupController;
exports.default = _default;
//# sourceMappingURL=meetups.js.map