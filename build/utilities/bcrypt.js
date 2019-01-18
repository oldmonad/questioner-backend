"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */
var Bcrypt = {
  hashPassword: function hashPassword(password) {
    return _bcrypt.default.hashSync(password, _bcrypt.default.genSaltSync(8));
  },
  comparePassword: function comparePassword(hashPassword, password) {
    return _bcrypt.default.compareSync(password, hashPassword);
  }
};
var _default = Bcrypt;
exports.default = _default;
//# sourceMappingURL=bcrypt.js.map