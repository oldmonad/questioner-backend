"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storage = _interopRequireDefault(require("../models/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable radix */

/* eslint-disable eol-last */
var rsvpController = {
  respond: function respond(req, res) {
    var meetup = parseInt(req.params.meetupId);
    var status = req.body.status;

    var rsvp = _storage.default.rsvp(meetup, status);

    var specificMeetup = _storage.default.findOne(meetup);

    var response = {
      meetup: specificMeetup.meetupId,
      topic: specificMeetup.topic,
      rsvp: rsvp
    };
    res.status(200).json({
      status: 200,
      data: [response]
    });
  }
};
var _default = rsvpController;
exports.default = _default;
//# sourceMappingURL=rsvp.js.map