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
      date: _joi.default.date().timestamp().required(),
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
      user: _joi.default.number().required(),
      meetup: _joi.default.number().required(),
      title: _joi.default.string().required(),
      body: _joi.default.string().required()
    }
  }
};
exports.default = _default;
//# sourceMappingURL=validator.js.map