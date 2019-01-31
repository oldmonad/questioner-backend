"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("./user"));

var _meetups = _interopRequireDefault(require("./meetups"));

var _questions = _interopRequireDefault(require("./questions"));

var _comments = _interopRequireDefault(require("./comments"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */
var router = new _express.Router();
router.use('/auth', _user.default);
router.use('/meetups', _Auth.default.verifyToken, _meetups.default);
router.use('/questions', _Auth.default.verifyToken, _questions.default);
router.use('/comments', _Auth.default.verifyToken, _comments.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map