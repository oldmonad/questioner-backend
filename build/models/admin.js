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

var AdminModel =
/*#__PURE__*/
function () {
  function AdminModel(user) {
    _classCallCheck(this, AdminModel);

    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.phonenumber = user.phonenumber;
  }

  _createClass(AdminModel, [{
    key: "newAdminSignUp",
    value: function () {
      var _newAdminSignUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var queryPlaceholder, values, _ref, rows;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryPlaceholder = "INSERT INTO admin (firstname, lastname,\n      username, email, password,  phonenumber)\n      VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, firstname, lastname, username, email, phonenumber";
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

      function newAdminSignUp() {
        return _newAdminSignUp.apply(this, arguments);
      }

      return newAdminSignUp;
    }()
  }], [{
    key: "findAdminByEmail",
    value: function () {
      var _findAdminByEmail = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(email) {
        var queryPlaceholder, values, _ref2, rows;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM admin WHERE email = $1';
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

      function findAdminByEmail(_x) {
        return _findAdminByEmail.apply(this, arguments);
      }

      return findAdminByEmail;
    }()
  }, {
    key: "findAdminByUsername",
    value: function () {
      var _findAdminByUsername = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(username) {
        var queryPlaceholder, values, _ref3, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryPlaceholder = 'SELECT * FROM admin WHERE username = $1';
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

      function findAdminByUsername(_x2) {
        return _findAdminByUsername.apply(this, arguments);
      }

      return findAdminByUsername;
    }()
  }]);

  return AdminModel;
}();

var _default = AdminModel;
exports.default = _default;
//# sourceMappingURL=admin.js.map