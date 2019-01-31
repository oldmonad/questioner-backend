"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _responseformat = require("../utilities/responseformat");

/* eslint-disable eol-last */
var _default = function _default(req, res, next) {
  var id = req.params.id;
  var newId = parseInt(id, 10);

  if (!newId) {
    return (0, _responseformat.errorResponse)(res, 422, 'Invalid id.');
  }

  req.params.id = newId;
  return next();
};

exports.default = _default;
//# sourceMappingURL=validateid.js.map