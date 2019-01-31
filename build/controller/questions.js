"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _question = _interopRequireDefault(require("../models/question"));

var _meetup = _interopRequireDefault(require("../models/meetup"));

var _responseformat = require("../utilities/responseformat");

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
              req.body.userId = id;
              question = new _question.default(req.body);
              _context.next = 5;
              return _meetup.default.retrieveSingleMeetup(question.meetupId);

            case 5:
              meetupExists = _context.sent;

              if (meetupExists) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 404, 'Meetup not found'));

            case 8:
              _context.next = 10;
              return question.post();

            case 10:
              newQuestion = _context.sent;
              return _context.abrupt("return", (0, _responseformat.successResponse)(res, 201, 'Question created', newQuestion));

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
  }(),
  upvote: function () {
    var _upvote = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var questionId, userId, questionExists, vote, voted, _result, result;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              questionId = req.params.id;
              userId = req.user.id;
              _context2.next = 4;
              return _question.default.getById(questionId);

            case 4:
              questionExists = _context2.sent;

              if (questionExists) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", (0, _responseformat.errorResponse)(res, 404, 'Question not found.'));

            case 7:
              if (!(questionExists.user_id === userId)) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", (0, _responseformat.errorResponse)(res, 400, 'You can not vote on your own question.'));

            case 9:
              vote = 'upvoted';
              _context2.next = 12;
              return _question.default.ifVoted(userId, questionId);

            case 12:
              voted = _context2.sent;

              if (!(voted && voted.vote === 'downvoted')) {
                _context2.next = 22;
                break;
              }

              _context2.next = 16;
              return _question.default.updateVoteStatus(questionId);

            case 16:
              _context2.next = 18;
              return _question.default.balaceDownvote(questionId);

            case 18:
              _context2.next = 20;
              return _question.default.upvote(questionId);

            case 20:
              _result = _context2.sent;
              return _context2.abrupt("return", (0, _responseformat.successResponse)(res, 200, "Question ".concat(vote, "."), _result));

            case 22:
              if (!(voted && voted.vote === 'upvoted')) {
                _context2.next = 28;
                break;
              }

              _context2.next = 25;
              return _question.default.balanceUpvoteRecord(questionId);

            case 25:
              _context2.next = 27;
              return _question.default.deleteVoteRecord(userId, questionId);

            case 27:
              return _context2.abrupt("return", (0, _responseformat.successResponse)(res, 200, 'Question unvoted', null));

            case 28:
              _context2.next = 30;
              return _question.default.upvote(questionId);

            case 30:
              result = _context2.sent;
              _context2.next = 33;
              return _question.default.createVoteRecord(userId, questionId, vote);

            case 33:
              return _context2.abrupt("return", (0, _responseformat.successResponse)(res, 200, "Question ".concat(vote, "."), result));

            case 34:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function upvote(_x3, _x4) {
      return _upvote.apply(this, arguments);
    }

    return upvote;
  }(),
  downvote: function () {
    var _downvote = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res) {
      var questionId, userId, questionExists, vote, voted, _result2, result;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              questionId = req.params.id;
              userId = req.user.id;
              _context3.next = 4;
              return _question.default.getById(questionId);

            case 4:
              questionExists = _context3.sent;

              if (questionExists) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", (0, _responseformat.errorResponse)(res, 404, 'Question not found.'));

            case 7:
              if (!(questionExists.user_id === userId)) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", (0, _responseformat.errorResponse)(res, 400, 'You can not vote on your own question.'));

            case 9:
              vote = 'downvoted';
              _context3.next = 12;
              return _question.default.ifVoted(userId, questionId);

            case 12:
              voted = _context3.sent;

              if (!(voted && voted.vote === 'upvoted')) {
                _context3.next = 22;
                break;
              }

              _context3.next = 16;
              return _question.default.updateVoteStatus(questionId);

            case 16:
              _context3.next = 18;
              return _question.default.balanceUpvoteRecord(questionId);

            case 18:
              _context3.next = 20;
              return _question.default.downvote(questionId);

            case 20:
              _result2 = _context3.sent;
              return _context3.abrupt("return", (0, _responseformat.successResponse)(res, 200, "Question ".concat(vote, "."), _result2));

            case 22:
              if (!(voted && voted.vote === 'downvoted')) {
                _context3.next = 28;
                break;
              }

              _context3.next = 25;
              return _question.default.balanceDownvoteRecord(questionId);

            case 25:
              _context3.next = 27;
              return _question.default.deleteVoteRecord(userId, questionId);

            case 27:
              return _context3.abrupt("return", (0, _responseformat.successResponse)(res, 200, 'Question unvoted', null));

            case 28:
              _context3.next = 30;
              return _question.default.downvote(questionId);

            case 30:
              result = _context3.sent;
              _context3.next = 33;
              return _question.default.createVoteRecord(userId, questionId, vote);

            case 33:
              return _context3.abrupt("return", (0, _responseformat.successResponse)(res, 200, "Question ".concat(vote, "."), result));

            case 34:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function downvote(_x5, _x6) {
      return _downvote.apply(this, arguments);
    }

    return downvote;
  }()
};
exports.default = _default;
//# sourceMappingURL=questions.js.map