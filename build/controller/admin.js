"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jwt = _interopRequireDefault(require("../utilities/jwt"));

var _bcrypt = _interopRequireDefault(require("../utilities/bcrypt"));

var _admin = _interopRequireDefault(require("../models/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AdminController = {
  createnewAdmin: function () {
    var _createnewAdmin = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var newAdmin, isExistingAdminMail, isExistingAdminName, createdUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(req.body.password !== req.body.confirmPassword)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                status: 400,
                error: 'Passwords do not match'
              }));

            case 2:
              newAdmin = new _admin.default(req.body);
              _context.next = 5;
              return _admin.default.findAdminByEmail(newAdmin.email);

            case 5:
              isExistingAdminMail = _context.sent;

              if (!isExistingAdminMail) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", res.status(409).json({
                status: 409,
                error: 'This email address is already taken'
              }));

            case 8:
              _context.next = 10;
              return _admin.default.findAdminByUsername(newAdmin.username);

            case 10:
              isExistingAdminName = _context.sent;

              if (!isExistingAdminName) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", res.status(409).json({
                status: 409,
                error: 'This username is already taken'
              }));

            case 13:
              newAdmin.password = _bcrypt.default.hashPassword(newAdmin.password);
              _context.next = 16;
              return newAdmin.newAdminSignUp();

            case 16:
              createdUser = _context.sent;
              return _context.abrupt("return", res.status(201).json({
                status: 201,
                message: 'Admin created',
                data: createdUser
              }));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createnewAdmin(_x, _x2) {
      return _createnewAdmin.apply(this, arguments);
    }

    return createnewAdmin;
  }(),
  loginAdmin: function () {
    var _loginAdmin = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var _req$body, email, password, isExistingAdminMail, tokenData, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context2.next = 3;
              return _admin.default.findAdminByEmail(email);

            case 3:
              isExistingAdminMail = _context2.sent;

              if (isExistingAdminMail) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", res.status(404).json({
                status: 404,
                error: 'The credentials you provided is incorrect'
              }));

            case 6:
              if (_bcrypt.default.comparePassword(isExistingAdminMail.password, password)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", res.status(404).json({
                status: 404,
                error: 'The credentials you provided is incorrect'
              }));

            case 8:
              tokenData = {
                id: isExistingAdminMail.id,
                username: isExistingAdminMail.username,
                admin: isExistingAdminMail.admin
              };
              _context2.next = 11;
              return _jwt.default.generateToken(tokenData);

            case 11:
              token = _context2.sent;
              return _context2.abrupt("return", res.status(200).send({
                status: 200,
                message: 'You are logged in as an admin',
                token: token
              }));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loginAdmin(_x3, _x4) {
      return _loginAdmin.apply(this, arguments);
    }

    return loginAdmin;
  }()
};
var _default = AdminController;
exports.default = _default;
//# sourceMappingURL=admin.js.map