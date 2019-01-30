"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meetup = _interopRequireDefault(require("../models/meetup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var MeetupController = {
  createMeetup: function () {
    var _createMeetup = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var _req$body, topic, location, date, image, tags, formatedTags, newMeetUp, meetupData, createdMeetup;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, topic = _req$body.topic, location = _req$body.location, date = _req$body.date, image = _req$body.image, tags = _req$body.tags;
              formatedTags = tags.trim().split('');
              newMeetUp = {
                topic: topic,
                location: location,
                date: date,
                image: image,
                formatedTags: formatedTags
              };
              meetupData = new _meetup.default(newMeetUp);
              _context.next = 6;
              return meetupData.createMeetup();

            case 6:
              createdMeetup = _context.sent;
              res.status(201).json({
                status: 201,
                message: 'Meetup created',
                data: createdMeetup
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createMeetup(_x, _x2) {
      return _createMeetup.apply(this, arguments);
    }

    return createMeetup;
  }(),
  getAllMeetups: function () {
    var _getAllMeetups = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var allMeetups;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _meetup.default.retrieveAllMeetups();

            case 2:
              allMeetups = _context2.sent;

              if (allMeetups.length === 0) {
                res.status(204).json({
                  status: 204,
                  error: 'Empty resource'
                });
              }

              return _context2.abrupt("return", res.status(200).json({
                status: 200,
                data: allMeetups
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getAllMeetups(_x3, _x4) {
      return _getAllMeetups.apply(this, arguments);
    }

    return getAllMeetups;
  }(),
  getSingleMeetup: function () {
    var _getSingleMeetup = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res) {
      var id, retrievedMeetup;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              _context3.next = 3;
              return _meetup.default.retrieveSingleMeetup(id);

            case 3:
              retrievedMeetup = _context3.sent;

              if (!retrievedMeetup) {
                res.status(404).json({
                  status: 404,
                  error: 'Meetup not found'
                });
              }

              return _context3.abrupt("return", res.status(200).json({
                status: 200,
                message: 'Meetup Found!',
                data: retrievedMeetup
              }));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getSingleMeetup(_x5, _x6) {
      return _getSingleMeetup.apply(this, arguments);
    }

    return getSingleMeetup;
  }(),
  getUpcomingMeetups: function () {
    var _getUpcomingMeetups = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(req, res) {
      var currentDate, upcomingMeetups;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              currentDate = new Date(Date.now() / 1000) + 39;
              _context4.next = 3;
              return _meetup.default.retrieveUpcomingMeetups(currentDate);

            case 3:
              upcomingMeetups = _context4.sent;

              if (!(upcomingMeetups.length === 0)) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(404).json({
                status: 404,
                err0r: 'No upcoming meetups found'
              }));

            case 6:
              return _context4.abrupt("return", res.status(200).json({
                status: 200,
                message: 'These are pending meetups',
                data: upcomingMeetups
              }));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getUpcomingMeetups(_x7, _x8) {
      return _getUpcomingMeetups.apply(this, arguments);
    }

    return getUpcomingMeetups;
  }()
};
var _default = MeetupController;
exports.default = _default;
//# sourceMappingURL=meetups.js.map