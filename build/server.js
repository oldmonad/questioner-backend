"use strict";

var _http = _interopRequireDefault(require("http"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var port = process.env.PORT || 3000;

var server = _http.default.createServer(_app.default);

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("Server running on port ".concat(port));
}); // /* eslint-disable eol-last */
// /* eslint-disable no-undef */
// import http from 'http';
// import express from 'express';
// import dotenv from 'dotenv';
// import logger from 'morgan';
// import bodyParser from 'body-parser';
// // import expressValidator from 'express-validator';
// import routes from './routes/routes';
// dotenv.config();
// // Set up express app
// const server = express();
// const router = express.Router();
// // Port configuration
// const port = process.env.PORT || 8000;
// routes(router);
// // Log requests to the console
// server.use(logger('dev'));
// // Parse incoming request data
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({
//   extended: false,
// }));
// // server.use(expressValidator());
// // API Routes
// server.use('/api/v1', router);
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
// // Create server
// const app = http.createServer(server);
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
// export default server;
//# sourceMappingURL=server.js.map