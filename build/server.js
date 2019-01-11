"use strict";

var _http = _interopRequireDefault(require("http"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */
_dotenv.default.config();

var port = process.env.PORT || 3000;

var server = _http.default.createServer(_app.default);

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("Server running on port ".concat(port));
});
//# sourceMappingURL=server.js.map