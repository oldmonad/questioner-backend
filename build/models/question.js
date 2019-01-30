"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../db/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Question =
/*#__PURE__*/
function () {
  function Question(question) {
    _classCallCheck(this, Question);

    this.meetupid = question.meetupid;
    this.title = question.title;
    this.body = question.body;
    this.userid = question.userid;
  }

  _createClass(Question, [{
    key: "postQuestion",
    value: function () {
      var _postQuestion = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var queryPlaceholder, queryValues, _ref, rows;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryPlaceholder = "INSERT INTO questions (meetupid, title, body, userid)\n    queryValues ($1, $2, $3, $4) RETURNING *";
                queryValues = [this.meetupid, this.title, this.body, this.userid];
                _context.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref = _context.sent;
                rows = _ref.rows;
                return _context.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function postQuestion() {
        return _postQuestion.apply(this, arguments);
      }

      return postQuestion;
    }()
  }], [{
    key: "getQuestionById",
    value: function () {
      var _getQuestionById = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id) {
        var queryPlaceholder, queryValues, _ref2, rows;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM questions WHERE id = $1';
                queryValues = [id];
                _context2.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref2 = _context2.sent;
                rows = _ref2.rows;
                return _context2.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getQuestionById(_x) {
        return _getQuestionById.apply(this, arguments);
      }

      return getQuestionById;
    }()
  }, {
    key: "upvoteQuestion",
    value: function () {
      var _upvoteQuestion = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id) {
        var queryPlaceholder, queryValues, _ref3, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryPlaceholder = 'UPDATE questions SET upvotes = upvotes + 1 WHERE id = $1 RETURNING *';
                queryValues = [id];
                _context3.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref3 = _context3.sent;
                rows = _ref3.rows;
                return _context3.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function upvoteQuestion(_x2) {
        return _upvoteQuestion.apply(this, arguments);
      }

      return upvoteQuestion;
    }()
  }, {
    key: "downvoteQuestion",
    value: function () {
      var _downvoteQuestion = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id) {
        var queryPlaceholder, queryValues, _ref4, rows;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                queryPlaceholder = 'UPDATE questions SET downvotes = downvotes + 1 WHERE id = $1 RETURNING *';
                queryValues = [id];
                _context4.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref4 = _context4.sent;
                rows = _ref4.rows;
                return _context4.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function downvoteQuestion(_x3) {
        return _downvoteQuestion.apply(this, arguments);
      }

      return downvoteQuestion;
    }()
  }, {
    key: "updateVotesTable",
    value: function () {
      var _updateVotesTable = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(userid, questionid, vote) {
        var queryPlaceholder, queryValues, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                queryPlaceholder = "INSERT INTO votes (userid, questionid, vote) queryValues\n    ($1, $2, $3)";
                queryValues = [userid, questionid, vote];
                _context5.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                result = _context5.sent;
                return _context5.abrupt("return", result);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateVotesTable(_x4, _x5, _x6) {
        return _updateVotesTable.apply(this, arguments);
      }

      return updateVotesTable;
    }()
  }, {
    key: "ifVoted",
    value: function () {
      var _ifVoted = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(userid, questionid) {
        var queryPlaceholder, queryValues, _ref5, rows;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM votes WHERE userid = $1 AND questionid = $2';
                queryValues = [userid, questionid];
                _context6.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref5 = _context6.sent;
                rows = _ref5.rows;
                return _context6.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function ifVoted(_x7, _x8) {
        return _ifVoted.apply(this, arguments);
      }

      return ifVoted;
    }()
  }]);

  return Question;
}();

var _default = Question;
exports.default = _default;
//# sourceMappingURL=question.js.map