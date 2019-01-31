"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

require("@babel/polyfill");

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/first */

/* eslint-disable eol-last */
// Set up express app
var app = (0, _express.default)();
// Log requests to the console
app.use((0, _morgan.default)('dev')); // Parse incoming request data

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/api/v1', _routes.default);
app.all('/api/v1', function (req, res) {
  res.status(200).json({
    status: 200,
    message: 'Welcome to the Questioner API.'
  });
});
app.all('/*', function (req, res) {
  return res.status(404).json({
    status: 404,
    message: 'Not Found'
  });
});
app.use(function (req, res, next) {
  var error = new Error('Invalid route');
  error.status = 404;
  next(error);
});
app.use(function (error, req, res) {
  res.status(error.status || 500);
  res.json({
    status: error.status,
    error: error.messages
  });
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map