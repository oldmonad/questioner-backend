"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _questions = _interopRequireDefault(require("../controller/questions"));

var _validatequestion = _interopRequireDefault(require("../middleware/validatequestion"));

var _trycatch = _interopRequireDefault(require("../utilities/trycatch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/', _validatequestion.default.validateQuestion, (0, _trycatch.default)(_questions.default.createQuestion));
router.patch('/:id/upvote', (0, _trycatch.default)(_questions.default.upvote));
router.patch('/:id/downvote', (0, _trycatch.default)(_questions.default.downvote));
var _default = router;
exports.default = _default;
//# sourceMappingURL=questions.js.map