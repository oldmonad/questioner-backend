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

var Rsvp =
/*#__PURE__*/
function () {
  function Rsvp(rsvp) {
    _classCallCheck(this, Rsvp);

    this.response = rsvp.response;
  }

  _createClass(Rsvp, [{
    key: "responseToMeetup",
    value: function () {
      var _responseToMeetup = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(meetupId, userId) {
        var queryPlaceholder, queryValues, _ref, rows;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryPlaceholder = 'INSERT INTO rsvps (meetupid, userid, response) queryValues ($1, $2, $3) RETURNING *';
                queryValues = [meetupId, userId, this.response];
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

      function responseToMeetup(_x, _x2) {
        return _responseToMeetup.apply(this, arguments);
      }

      return responseToMeetup;
    }()
  }], [{
    key: "allUserResponse",
    value: function () {
      var _allUserResponse = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(userId, response) {
        var queryPlaceholder, queryValues, _ref2, rows;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM rsvps WHERE userid =$1 AND response = $2';
                queryValues = [userId, response];
                _context2.next = 4;
                return _index.default.query(queryPlaceholder, queryValues);

              case 4:
                _ref2 = _context2.sent;
                rows = _ref2.rows;
                return _context2.abrupt("return", rows);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function allUserResponse(_x3, _x4) {
        return _allUserResponse.apply(this, arguments);
      }

      return allUserResponse;
    }()
  }, {
    key: "getRsvpResponse",
    value: function () {
      var _getRsvpResponse = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(meetupId, userId) {
        var queryPlaceholder, queryValues, _ref3, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM rsvps WHERE meetupid = $1 AND userid = $2';
                queryValues = [meetupId, userId];
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

      function getRsvpResponse(_x5, _x6) {
        return _getRsvpResponse.apply(this, arguments);
      }

      return getRsvpResponse;
    }()
  }]);

  return Rsvp;
}();

exports.default = Rsvp;
//# sourceMappingURL=rsvp.js.map