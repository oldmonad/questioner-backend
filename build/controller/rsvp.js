"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meetup = _interopRequireDefault(require("../models/meetup"));

var _rsvp = _interopRequireDefault(require("../models/rsvp"));

var _responseformat = require("../utilities/responseformat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var rsvpController = {
  respondToRsvp: function () {
    var _respondToRsvp = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var meetupId, userId, response, checkForMeetup, responseInstance, newResponseData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              meetupId = req.params.id;
              userId = req.user.id;
              response = req.body.response;
              _context.next = 5;
              return _meetup.default.retrieveSingleMeetup(meetupId);

            case 5:
              checkForMeetup = _context.sent;

              if (checkForMeetup) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 404, 'Meetup not found'));

            case 8:
              responseInstance = new _rsvp.default(req.body);
              _context.next = 11;
              return responseInstance.responseToMeetup(meetupId, userId);

            case 11:
              newResponseData = _context.sent;

              if (!(response === 'yes')) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.successResponse)(res, 200, 'You are scheduled to attend this meetup', newResponseData));

            case 14:
              return _context.abrupt("return", (0, _responseformat.successResponse)(res, 200, 'Your response has been recorded', null));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function respondToRsvp(_x, _x2) {
      return _respondToRsvp.apply(this, arguments);
    }

    return respondToRsvp;
  }(),
  getJoinedMeetups: function () {
    var _getJoinedMeetups = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var id, response, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.user.id;
              response = 'yes';
              _context2.next = 4;
              return _rsvp.default.userResponses(id, response);

            case 4:
              result = _context2.sent;

              if (!(result.length === 0)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", (0, _responseformat.errorResponse)(res, 404, 'You have not joined any meetups yet.'));

            case 7:
              return _context2.abrupt("return", (0, _responseformat.successResponse)(res, 200, 'Joined meetups found.', result));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getJoinedMeetups(_x3, _x4) {
      return _getJoinedMeetups.apply(this, arguments);
    }

    return getJoinedMeetups;
  }()
};
var _default = rsvpController;
exports.default = _default;
//# sourceMappingURL=rsvp.js.map