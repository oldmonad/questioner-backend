"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jwt = _interopRequireDefault(require("../utilities/jwt"));

var _bcrypt = _interopRequireDefault(require("../utilities/bcrypt"));

var _user = _interopRequireDefault(require("../models/user"));

var _responseformat = require("../utilities/responseformat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UserController = {
  createNewUser: function () {
    var _createNewUser = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var newUser, isExistingUserMail, isExistingUsername, createdUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(req.body.password !== req.body.confirmPassword)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 400, 'Passwords do not match'));

            case 2:
              newUser = new _user.default(req.body);
              _context.next = 5;
              return _user.default.findUserByEmail(newUser.email);

            case 5:
              isExistingUserMail = _context.sent;

              if (!isExistingUserMail) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 409, 'This email address is not available'));

            case 8:
              _context.next = 10;
              return _user.default.findUserByUsername(newUser.username);

            case 10:
              isExistingUsername = _context.sent;

              if (!isExistingUsername) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 409, 'This username is not available'));

            case 13:
              newUser.password = _bcrypt.default.hashPassword(newUser.password);
              _context.next = 16;
              return newUser.newUserSignUp();

            case 16:
              createdUser = _context.sent;
              return _context.abrupt("return", (0, _responseformat.successResponse)(res, 201, 'You have created an account', createdUser));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createNewUser(_x, _x2) {
      return _createNewUser.apply(this, arguments);
    }

    return createNewUser;
  }(),
  loginUser: function () {
    var _loginUser = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var _req$body, email, password, isExistingUserMail, admin, tokenData, token, loginData;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context2.next = 3;
              return _user.default.findUserByEmail(email);

            case 3:
              isExistingUserMail = _context2.sent;
              admin = isExistingUserMail.admin;

              if (isExistingUserMail) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", (0, _responseformat.errorResponse)(res, 404, 'The credentials you provided is incorrect'));

            case 7:
              if (_bcrypt.default.comparePassword(isExistingUserMail.password, password)) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", (0, _responseformat.errorResponse)(res, 401, 'The credentials you provided is incorrect'));

            case 9:
              tokenData = {
                id: isExistingUserMail.id,
                username: isExistingUserMail.username,
                admin: isExistingUserMail.admin
              };
              _context2.next = 12;
              return _jwt.default.generateToken(tokenData);

            case 12:
              token = _context2.sent;
              _context2.next = 15;
              return _user.default.logIn(email);

            case 15:
              loginData = _context2.sent;
              return _context2.abrupt("return", (0, _responseformat.successfullLogin)(res, 200, admin ? 'You are logged in as an admin' : 'You are logged in as a normal user', token, loginData));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loginUser(_x3, _x4) {
      return _loginUser.apply(this, arguments);
    }

    return loginUser;
  }()
};
var _default = UserController;
exports.default = _default;
//# sourceMappingURL=user.js.map