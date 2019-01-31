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

var MeetupValidation =
/*#__PURE__*/
function () {
  function MeetupValidation() {
    _classCallCheck(this, MeetupValidation);
  }

  _createClass(MeetupValidation, null, [{
    key: "validCreateMeetup",
    value: function validCreateMeetup(req, res, next) {
      var meetup = req.body;
      var meetupProperties = {
        topic: 'required|string|min:1|max:255',
        location: 'required|string|min:1',
        happeningOn: ['required', 'date', 'regex:/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/'],
        images: 'url'
      };
      var validator = new _validatorjs.default(meetup, meetupProperties, _errorresponses.default);
      validator.passes(function () {
        return next();
      });
      validator.fails(function () {
        var errors = validator.errors.all();
        return (0, _responseformat.errorResponse)(res, 400, errors);
      });
    }
  }, {
    key: "checkDate",
    value: function checkDate(req, res, next) {
      var happeningOn = req.body.happeningOn;
      var currentDate = new Date(Date.now());
      var meetupDate = new Date(happeningOn);

      if (currentDate > meetupDate) {
        return (0, _responseformat.errorResponse)(res, 400, "Your Date should be greater than ".concat(currentDate, "."));
      }

      return next();
    }
  }]);

  return MeetupValidation;
}();

exports.default = MeetupValidation;
//# sourceMappingURL=validatemeetups.js.map