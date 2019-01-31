"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controller/user"));

var _trycatch = _interopRequireDefault(require("../utilities/trycatch"));

var _validateuser = _interopRequireDefault(require("../middleware/validateuser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/signup', _validateuser.default.validateSignUp, (0, _trycatch.default)(_user.default.createNewUser));
router.post('/login', _validateuser.default.validateLogin, (0, _trycatch.default)(_user.default.loginUser));
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.js.map