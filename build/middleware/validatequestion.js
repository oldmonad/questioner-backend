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

var QuestionValidation =
/*#__PURE__*/
function () {
  function QuestionValidation() {
    _classCallCheck(this, QuestionValidation);
  }

  _createClass(QuestionValidation, null, [{
    key: "validateQuestion",
    value: function validateQuestion(req, res, next) {
      var question = req.body;
      var questionProperties = {
        meetupId: 'required|numeric',
        title: 'required|string|max:200',
        body: 'required|string|max:500'
      };
      var validator = new _validatorjs.default(question, questionProperties, _errorresponses.default);
      validator.passes(function () {
        return next();
      });
      validator.fails(function () {
        var errors = validator.errors.all();
        return (0, _responseformat.errorResponse)(res, 400, errors);
      });
    }
  }]);

  return QuestionValidation;
}();

exports.default = QuestionValidation;
//# sourceMappingURL=validatequestion.js.map