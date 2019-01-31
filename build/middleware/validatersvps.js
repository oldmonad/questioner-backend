"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _responseformat = require("../utilities/responseformat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RsvpValidation =
/*#__PURE__*/
function () {
  function RsvpValidation() {
    _classCallCheck(this, RsvpValidation);
  }

  _createClass(RsvpValidation, null, [{
    key: "validRsvp",
    value: function validRsvp(req, res, next) {
      var userResponse = req.body;

      if (userResponse.response) {
        userResponse.response = userResponse.response.trim().toLowerCase();
      }

      var responseProperties = {
        response: ['required', {
          in: ['yes', 'no', 'maybe']
        }]
      };
      var validator = new _validatorjs.default(userResponse, responseProperties);
      validator.passes(function () {
        return next();
      });
      validator.fails(function () {
        var errorMessage = 'Your response should be either Yes, No, or Maybe';
        return (0, _responseformat.errorResponse)(res, 400, errorMessage);
      });
    }
  }]);

  return RsvpValidation;
}();

exports.default = RsvpValidation;
//# sourceMappingURL=validatersvps.js.map