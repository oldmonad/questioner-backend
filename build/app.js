"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

require("@babel/polyfill");

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressValidation = _interopRequireDefault(require("express-validation"));

var _user = _interopRequireDefault(require("./routes/user"));

var _admin = _interopRequireDefault(require("./routes/admin"));

var _meetups = _interopRequireDefault(require("./routes/meetups"));

var _questions = _interopRequireDefault(require("./routes/questions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/first */

/* eslint-disable eol-last */
// Set up express app
var app = (0, _express.default)();
// import commentRoutes from './routes/comments';
// Log requests to the console
app.use((0, _morgan.default)('dev')); // Parse incoming request data

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/api/v1/admin', _admin.default);
app.use('/api/v1', _user.default);
app.use('/api/v1/meetups', _meetups.default);
app.use('/api/v1/questions', _questions.default); // app.use('api/v1/comments', commentRoutes);

app.use(function (req, res, next) {
  var error = new Error('Invalid route');
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  if (error instanceof _expressValidation.default.ValidationError) {
    res.status(error.status).json(error);
  } else {
    res.status(500).json({
      status: error.status,
      message: error.messages
    });
  }
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