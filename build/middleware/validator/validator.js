"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */
var _default = {
  createMeetup: {
    body: {
      topic: _joi.default.string().required(),
      location: _joi.default.string().required(),
      date: _joi.default.date().required(),
      tags: _joi.default.string()
    }
  },
  getMeetup: {
    params: {
      meetupId: _joi.default.number().required()
    }
  },
  postQuestion: {
    body: {
      meetupid: _joi.default.number().required(),
      title: _joi.default.string().required(),
      body: _joi.default.string().required()
    }
  },
  rsvps: {
    body: {
      meetupId: _joi.default.number().required(),
      rsvps: _joi.default.string().valid('yes', 'no', 'maybe').required()
    }
  }
};
exports.default = _default;
//# sourceMappingURL=validator.js.map