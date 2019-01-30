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

var UserModel =
/*#__PURE__*/
function () {
  function UserModel(user) {
    _classCallCheck(this, UserModel);

    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.phonenumber = user.phonenumber;
  }

  _createClass(UserModel, [{
    key: "newUserSignUp",
    value: function () {
      var _newUserSignUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var queryPlaceholder, values, _ref, rows;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryPlaceholder = "INSERT INTO users (firstname, lastname,\n      username, email, password,  phonenumber)\n      VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, firstname, lastname, username, email, phonenumber";
                values = [this.firstname, this.lastname, this.username, this.email, this.password, this.phonenumber];
                _context.next = 4;
                return _index.default.query(queryPlaceholder, values);

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

      function newUserSignUp() {
        return _newUserSignUp.apply(this, arguments);
      }

      return newUserSignUp;
    }()
  }], [{
    key: "findUserByEmail",
    value: function () {
      var _findUserByEmail = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(email) {
        var queryPlaceholder, values, _ref2, rows;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM users WHERE email = $1';
                values = [email];
                _context2.next = 4;
                return _index.default.query(queryPlaceholder, values);

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

      function findUserByEmail(_x) {
        return _findUserByEmail.apply(this, arguments);
      }

      return findUserByEmail;
    }()
  }, {
    key: "findUserByUsername",
    value: function () {
      var _findUserByUsername = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(username) {
        var queryPlaceholder, values, _ref3, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM users WHERE username = $1';
                values = [username];
                _context3.next = 4;
                return _index.default.query(queryPlaceholder, values);

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

      function findUserByUsername(_x2) {
        return _findUserByUsername.apply(this, arguments);
      }

      return findUserByUsername;
    }()
  }, {
    key: "logIn",
    value: function () {
      var _logIn = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(email) {
        var queryPlaceholder, values, _ref4, rows;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                queryPlaceholder = 'SELECT id, password FROM users WHERE email = $1';
                values = [email];
                _context4.next = 4;
                return _index.default.query(queryPlaceholder, values);

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

      function logIn(_x3) {
        return _logIn.apply(this, arguments);
      }

      return logIn;
    }()
  }]);

  return UserModel;
}();

var _default = UserModel;
exports.default = _default;
//# sourceMappingURL=user.js.map