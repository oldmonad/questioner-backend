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
    var currentStatus = req.body.status;

    var rsvps = _storage.default.rsvp(meetup, currentStatus);

    var response = {};
    res.status(200).json({
      message: 'Hitting rsvp route',
      data: [rsvps]
    });
  }
};
var _default = rsvpController;
exports.default = _default;
//# sourceMappingURL=rsvp.js.map