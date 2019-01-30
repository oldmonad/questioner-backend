"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meetup = _interopRequireDefault(require("../models/meetup"));

var _rsvp = _interopRequireDefault(require("../models/rsvp"));

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

              if (!checkForMeetup) {
                res.status(404).json({
                  status: 404,
                  error: 'Meetup not found'
                });
              }

              responseInstance = new _rsvp.default(req.body);
              _context.next = 10;
              return responseInstance.responseToMeetup(meetupId, userId);

            case 10:
              newResponseData = _context.sent;

              if (response === 'yes') {
                res.status(200).json({
                  status: 200,
                  message: 'You have registered for this meetup',
                  data: newResponseData
                });
              }

              return _context.abrupt("return", res.status(200).json({
                status: 200,
                message: 'Your response has been recorded'
              }));

            case 13:
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
  }()
};
var _default = rsvpController;
exports.default = _default;
//# sourceMappingURL=rsvp.js.map