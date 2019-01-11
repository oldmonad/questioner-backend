"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meetups = _interopRequireDefault(require("./routes/meetups"));

var _questions = _interopRequireDefault(require("./routes/questions"));

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
app.use('/api/v1/meetups', _meetups.default);
app.use('/api/v1/questions', _questions.default); // API Routes
// app.use('/api/v1', router);
// app.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = 400;
//   next(error);
// });
// app.use((error, req, res) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });
// routes(router);

var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map