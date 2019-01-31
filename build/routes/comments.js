"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _comments = _interopRequireDefault(require("../controller/comments"));

var _trycatch = _interopRequireDefault(require("../utilities/trycatch"));

var _validatecomment = _interopRequireDefault(require("../middleware/validatecomment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/', _validatecomment.default.validComment, (0, _trycatch.default)(_comments.default.createComment));
var _default = router;
exports.default = _default;
//# sourceMappingURL=comments.js.map