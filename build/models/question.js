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

    this.meetupId = question.meetupId;
    this.title = question.title;
    this.body = question.body;
    this.userId = question.userId;
  }

  _createClass(Question, [{
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var queryString, values, _ref, rows;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryString = "INSERT INTO questions (meetup_id, title, body, user_id)\n    VALUES ($1, $2, $3, $4) RETURNING *";
                values = [this.meetupId, this.title, this.body, this.userId];
                _context.next = 4;
                return _index.default.query(queryString, values);

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

      function post() {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }], [{
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator(
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

      function getById(_x) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "upvote",
    value: function () {
      var _upvote = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id) {
        var queryPlaceholder, queryValues, _ref3, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryPlaceholder = 'UPDATE questions SET up_votes = up_votes + 1 WHERE id = $1 RETURNING *';
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

      function upvote(_x2) {
        return _upvote.apply(this, arguments);
      }

      return upvote;
    }()
  }, {
    key: "downvote",
    value: function () {
      var _downvote = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id) {
        var queryPlaceholder, queryValues, _ref4, rows;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                queryPlaceholder = 'UPDATE questions SET down_votes = down_votes + 1 WHERE id = $1 RETURNING *';
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

      function downvote(_x3) {
        return _downvote.apply(this, arguments);
      }

      return downvote;
    }()
  }, {
    key: "createVoteRecord",
    value: function () {
      var _createVoteRecord = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(userId, questionId, vote) {
        var queryPlaceholder, queryValues, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                queryPlaceholder = "INSERT INTO votes (user_id, question_id, vote) VALUES\n    ($1, $2, $3)";
                queryValues = [userId, questionId, vote];
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

      function createVoteRecord(_x4, _x5, _x6) {
        return _createVoteRecord.apply(this, arguments);
      }

      return createVoteRecord;
    }()
  }, {
    key: "balanceUpvoteRecord",
    value: function () {
      var _balanceUpvoteRecord = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(id) {
        var queryPlaceholder, queryValues, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                queryPlaceholder = 'UPDATE questions SET up_votes = up_votes - 1 WHERE id = $1 RETURNING *';
                queryValues = [id];
                _context6.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                result = _context6.sent;
                return _context6.abrupt("return", result);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function balanceUpvoteRecord(_x7) {
        return _balanceUpvoteRecord.apply(this, arguments);
      }

      return balanceUpvoteRecord;
    }()
  }, {
    key: "balanceDownvoteRecord",
    value: function () {
      var _balanceDownvoteRecord = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(id) {
        var queryPlaceholder, queryValues, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                queryPlaceholder = 'UPDATE questions SET down_votes = down_votes - 1 WHERE id = $1 RETURNING *';
                queryValues = [id];
                _context7.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                result = _context7.sent;
                return _context7.abrupt("return", result);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function balanceDownvoteRecord(_x8) {
        return _balanceDownvoteRecord.apply(this, arguments);
      }

      return balanceDownvoteRecord;
    }()
  }, {
    key: "ifVoted",
    value: function () {
      var _ifVoted = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(userId, questionId) {
        var queryPlaceholder, queryValues, _ref5, rows;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM votes WHERE user_id = $1 AND question_id = $2';
                queryValues = [userId, questionId];
                _context8.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref5 = _context8.sent;
                rows = _ref5.rows;
                return _context8.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function ifVoted(_x9, _x10) {
        return _ifVoted.apply(this, arguments);
      }

      return ifVoted;
    }()
  }, {
    key: "userVoteStatus",
    value: function () {
      var _userVoteStatus = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(userId, questionId) {
        var queryPlaceholder, queryValues, _ref6, rows;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                queryPlaceholder = 'SELECT vote FROM votes WHERE user_id = $1 AND question_id = $2';
                queryValues = [userId, questionId];
                _context9.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref6 = _context9.sent;
                rows = _ref6.rows;
                return _context9.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function userVoteStatus(_x11, _x12) {
        return _userVoteStatus.apply(this, arguments);
      }

      return userVoteStatus;
    }()
  }, {
    key: "updateVoteStatus",
    value: function () {
      var _updateVoteStatus = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(userId, questionId, vote) {
        var queryPlaceholder, queryValues, _ref7, rows;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                queryPlaceholder = "UPDATE votes SET vote='".concat(vote, "' WHERE user_id = $1 AND question_id = $2");
                queryValues = [userId, questionId];
                _context10.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref7 = _context10.sent;
                rows = _ref7.rows;
                return _context10.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateVoteStatus(_x13, _x14, _x15) {
        return _updateVoteStatus.apply(this, arguments);
      }

      return updateVoteStatus;
    }()
  }, {
    key: "deleteVoteRecord",
    value: function () {
      var _deleteVoteRecord = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(userId, questionId) {
        var queryPlaceholder, queryValues, result;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                queryPlaceholder = 'DELETE FROM votes where user_id = $1 AND question_id = $2';
                queryValues = [userId, questionId];
                _context11.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                result = _context11.sent;
                return _context11.abrupt("return", result);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function deleteVoteRecord(_x16, _x17) {
        return _deleteVoteRecord.apply(this, arguments);
      }

      return deleteVoteRecord;
    }()
  }]);

  return Question;
}();

var _default = Question;
exports.default = _default;
//# sourceMappingURL=question.js.map