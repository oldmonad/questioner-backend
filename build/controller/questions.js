"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _question = _interopRequireDefault(require("../models/question"));

var _meetup = _interopRequireDefault(require("../models/meetup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  createQuestion: function () {
    var _createQuestion = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var id, question, meetupExists, newQuestion;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.user.id;
              req.body.userid = id;
              question = new _question.default(req.body);
              _context.next = 5;
              return _meetup.default.getSingleMeetup(question.meetupid);

            case 5:
              meetupExists = _context.sent;

              if (meetupExists) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", res.status(404).json({
                status: 404,
                error: 'Meetup not found'
              }));

            case 8:
              _context.next = 10;
              return question.postQuestion();

            case 10:
              newQuestion = _context.sent;
              return _context.abrupt("return", res.status(201).json({
                status: 201,
                message: 'Question created',
                data: [newQuestion]
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createQuestion(_x, _x2) {
      return _createQuestion.apply(this, arguments);
    }

    return createQuestion;
  }()
};
exports.default = _default;
//# sourceMappingURL=questions.js.map