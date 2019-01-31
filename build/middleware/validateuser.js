"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _responseformat = require("../utilities/responseformat");

var _errorresponses = _interopRequireDefault(require("../utilities/errorresponses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserValidation =
/*#__PURE__*/
function () {
  function UserValidation() {
    _classCallCheck(this, UserValidation);
  }

  _createClass(UserValidation, null, [{
    key: "validateSignUp",
    value: function validateSignUp(req, res, next) {
      var user = req.body;
      var userProperties = {
        firstname: 'required|alpha|min:2|max:50',
        lastname: 'required|alpha|min:2|max:50',
        username: 'required|alpha_num|min:5|max:50',
        email: 'required|email|max:100',
        password: 'required|alpha_num|min:6|max:18',
        confirmPassword: 'required_with:password',
        phonenumber: 'required|digits:11'
      };
      var validator = new _validatorjs.default(user, userProperties, _errorresponses.default);
      validator.passes(function () {
        return next();
      });
      validator.fails(function () {
        var errors = validator.errors.all();
        return (0, _responseformat.errorResponse)(res, 400, errors);
      });
    }
  }, {
    key: "validateLogin",
    value: function validateLogin(req, res, next) {
      var user = req.body;
      var userProperties = {
        email: 'required|email|max:100',
        password: 'required|alpha_num|min:6|max:18'
      };
      var validator = new _validatorjs.default(user, userProperties, _errorresponses.default);
      validator.passes(function () {
        return next();
      });
      validator.fails(function () {
        var errors = validator.errors.all();
        return (0, _responseformat.errorResponse)(res, 400, errors);
      });
    }
  }]);

  return UserValidation;
}();

exports.default = UserValidation;
//# sourceMappingURL=validateuser.js.map