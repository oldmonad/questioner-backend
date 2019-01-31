"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _responseformat = require("../utilities/responseformat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var Auth = {
  verifyToken: function () {
    var _verifyToken = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res, next) {
      var header, token, decoded;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              header = req.headers.authorization;

              if (!(typeof header === 'undefined')) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 401, 'You are not authorized to make this action'));

            case 3:
              token = header.split(' ')[1];

              if (token) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 401, 'You are not authorized to make this action please login'));

            case 6:
              _context.prev = 6;
              _context.next = 9;
              return _jsonwebtoken.default.verify(token, process.env.SECRET);

            case 9:
              decoded = _context.sent;
              req.user = decoded;
              next();
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](6);
              return _context.abrupt("return", res.status(400).send(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 14]]);
    }));

    function verifyToken(_x, _x2, _x3) {
      return _verifyToken.apply(this, arguments);
    }

    return verifyToken;
  }(),
  adminAuth: function () {
    var _adminAuth = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res, next) {
      var admin;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              admin = req.user.admin;

              if (admin) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", (0, _responseformat.errorResponse)(res, 401, 'You are not authorized to make this action'));

            case 3:
              next();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function adminAuth(_x4, _x5, _x6) {
      return _adminAuth.apply(this, arguments);
    }

    return adminAuth;
  }()
};
var _default = Auth;
exports.default = _default;
//# sourceMappingURL=Auth.js.map