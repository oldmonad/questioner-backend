"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

console.log('Creating tables...');

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _index.default.query("CREATE TABLE IF NOT EXISTS users(\n        id SERIAL PRIMARY KEY,\n        firstname VARCHAR(50) NOT NULL,\n        lastname VARCHAR(50) NOT NULL,\n        username VARCHAR(50) UNIQUE NOT NULL,\n        email VARCHAR(100) UNIQUE NOT NULL,\n        phonenumber VARCHAR(11) NOT NULL,\n        password VARCHAR(100) NOT NULL,\n        admin BOOLEAN DEFAULT FALSE,\n        createdon TIMESTAMPTZ DEFAULT NOW())");

        case 3:
          _context.next = 5;
          return _index.default.query("CREATE TABLE IF NOT EXISTS admin(\n        id SERIAL PRIMARY KEY,\n        firstname VARCHAR(50) NOT NULL,\n        lastname VARCHAR(50) NOT NULL,\n        username VARCHAR(50) UNIQUE NOT NULL,\n        email VARCHAR(100) UNIQUE NOT NULL,\n        phonenumber VARCHAR(11) NOT NULL,\n        password VARCHAR(100) NOT NULL,\n        admin BOOLEAN DEFAULT TRUE,\n        createdon TIMESTAMPTZ DEFAULT NOW())");

        case 5:
          _context.next = 7;
          return _index.default.query("CREATE TABLE IF NOT EXISTS meetups(\n        id SERIAL PRIMARY KEY,\n        topic VARCHAR(255) NOT NULL,\n        location TEXT NOT NULL,\n        date VARCHAR(50) NOT NULL,\n        image VARCHAR(50),\n        tags VARCHAR(500),\n        createdon TIMESTAMPTZ DEFAULT NOW())");

        case 7:
          _context.next = 9;
          return _index.default.query("CREATE TABLE IF NOT EXISTS questions(\n        id SERIAL PRIMARY KEY,\n        meetupid INT NOT NULL,\n        title VARCHAR(255) NOT NULL,\n        body TEXT NOT NULL,\n        upvotes INT DEFAULT 0,\n        downvotes INT DEFAULT 0,\n        userid INT NOT NULL,\n        createdon TIMESTAMPTZ DEFAULT NOW(),\n        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE,\n        FOREIGN KEY (meetupid) REFERENCES meetups (id) ON DELETE CASCADE)");

        case 9:
          _context.next = 11;
          return _index.default.query("CREATE TABLE IF NOT EXISTS rsvps(\n        id SERIAL,\n        meetupid INT NOT NULL,\n        userid INT NOT NULL,\n        response VARCHAR(5) NOT NULL,\n        PRIMARY KEY(meetupid, userid),\n        FOREIGN KEY (meetupid) REFERENCES meetups (id) ON DELETE CASCADE,\n        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE)");

        case 11:
          _context.next = 13;
          return _index.default.query("CREATE TABLE IF NOT EXISTS comments(\n        id SERIAL PRIMARY KEY,\n        meetupid INT NOT NULL,\n        questionid INT NOT NULL,\n        body TEXT NOT NULL,\n        userid INT NOT NULL,\n        createdon TIMESTAMPTZ DEFAULT NOW(),\n        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE,\n        FOREIGN KEY (questionid) REFERENCES questions (id) ON DELETE CASCADE,\n        FOREIGN KEY (meetupid) REFERENCES meetups (id) ON DELETE CASCADE)");

        case 13:
          _context.next = 15;
          return _index.default.query("CREATE TABLE IF NOT EXISTS votes(\n        id SERIAL PRIMARY KEY,\n        userid INT NOT NULL,\n        questionid INT NOT NULL,\n        vote VARCHAR(8) NOT NULL,\n        FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE,\n        FOREIGN KEY (questionid) REFERENCES questions (id) ON DELETE CASCADE)");

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 17]]);
}))();
//# sourceMappingURL=migrationsCreateTables.js.map