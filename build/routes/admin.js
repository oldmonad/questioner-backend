"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("../controller/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/auth/signup', _admin.default.createnewAdmin);
router.post('/auth/login', _admin.default.loginAdmin);
var _default = router;
exports.default = _default;
//# sourceMappingURL=admin.js.map