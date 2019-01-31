"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successfullLogin = exports.errorResponse = exports.successResponse = void 0;

/* eslint-disable eol-last */
var successResponse = function successResponse(res, statusCode, message, data) {
  var response = {
    status: statusCode,
    message: message,
    data: data
  };
  return res.status(statusCode).json(response);
};

exports.successResponse = successResponse;

var successfullLogin = function successfullLogin(res, statusCode, message, token, data) {
  var response = {
    status: statusCode,
    message: message,
    token: token,
    data: data
  };
  return res.status(statusCode).json(response);
};

exports.successfullLogin = successfullLogin;

var errorResponse = function errorResponse(res, statusCode, message) {
  var response = {
    status: statusCode,
    error: message
  };
  return res.status(statusCode).json(response);
};

exports.errorResponse = errorResponse;
//# sourceMappingURL=responseformat.js.map