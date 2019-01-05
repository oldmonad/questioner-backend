"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./usingJsDataStructures/routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up express app
var server = (0, _express.default)();

var router = _express.default.Router(); // Port configuration


var port = parseInt(process.env.PORT, 10) || 8000;
(0, _routes.default)(router); // Log requests to the console

server.use((0, _morgan.default)('dev')); // Parse incoming request data

server.use(_bodyParser.default.json());
server.use(_bodyParser.default.urlencoded({
  extended: false
})); // API Routes

server.use('/api/v1', router); // Set up all default catch-all route that sends a message in JSON format

server.get('*', function (req, res) {
  return res.status(404).send({
    message: 'That route does not exist'
  });
}); // Create server

var app = _http.default.createServer(server);

app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
var _default = server;
exports.default = _default;
//# sourceMappingURL=server.js.map