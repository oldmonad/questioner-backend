"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _index = _interopRequireDefault(require("./index"));

var _bcrypt = _interopRequireDefault(require("../utilities/bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

console.log('Creating tables...');

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var password, Admin, queryPlaceholder, values, makeAdmin, adminValue;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Creating users table...');
          _context.next = 4;
          return _index.default.query("CREATE TABLE IF NOT EXISTS users(\n        id SERIAL PRIMARY KEY,\n        first_name VARCHAR(50) NOT NULL,\n        last_name VARCHAR(50) NOT NULL,\n        user_name VARCHAR(50) UNIQUE NOT NULL,\n        email VARCHAR(100) UNIQUE NOT NULL,\n        phone_number VARCHAR(11) NOT NULL,\n        password VARCHAR(100) NOT NULL,\n        admin BOOLEAN DEFAULT FALSE,\n        created_on TIMESTAMPTZ DEFAULT NOW())");

        case 4:
          password = _bcrypt.default.hashPassword(process.env.ADMIN_PASSWORD);
          Admin = {
            firstname: 'legolas',
            lastname: 'Aragorn',
            username: 'ShirePrince',
            email: 'legolaslegit@gmail.com',
            password: password,
            phonenumber: '08135266484'
          };
          queryPlaceholder = "INSERT INTO users (first_name, last_name, user_name, email, password,  phone_number)\n       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, first_name, last_name, user_name, email, phone_number";
          values = [Admin.firstname, Admin.lastname, Admin.username, Admin.email, Admin.password, Admin.phonenumber];
          _context.next = 10;
          return _index.default.query(queryPlaceholder, values);

        case 10:
          // eslint-disable-next-line quotes
          makeAdmin = "UPDATE users SET admin = true WHERE email = $1";
          adminValue = [Admin.email];
          _context.next = 14;
          return _index.default.query(makeAdmin, adminValue);

        case 14:
          console.log('Creating meetups table...');
          _context.next = 17;
          return _index.default.query("CREATE TABLE IF NOT EXISTS meetups(\n        id SERIAL PRIMARY KEY,\n        topic VARCHAR(255) NOT NULL,\n        location TEXT NOT NULL,\n        happening_on VARCHAR(50) NOT NULL,\n        image VARCHAR(50),\n        created_on TIMESTAMPTZ DEFAULT NOW())");

        case 17:
          console.log('Creating questions table...');
          _context.next = 20;
          return _index.default.query("CREATE TABLE IF NOT EXISTS questions(\n        id SERIAL PRIMARY KEY,\n        meetup_id INT NOT NULL,\n        title VARCHAR(255) NOT NULL,\n        body TEXT NOT NULL,\n        up_votes INT DEFAULT 0,\n        down_votes INT DEFAULT 0,\n        user_id INT NOT NULL,\n        created_on TIMESTAMPTZ DEFAULT NOW(),\n        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,\n        FOREIGN KEY (meetup_id) REFERENCES meetups (id) ON DELETE CASCADE)");

        case 20:
          console.log('Creating rsvps table...');
          _context.next = 23;
          return _index.default.query("CREATE TABLE IF NOT EXISTS rsvps(\n        id SERIAL,\n        meetup_id INT NOT NULL,\n        user_id INT NOT NULL,\n        response VARCHAR(5) NOT NULL,\n        PRIMARY KEY(meetup_id, user_id),\n        FOREIGN KEY (meetup_id) REFERENCES meetups (id) ON DELETE CASCADE,\n        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE)");

        case 23:
          console.log('Creating comments table...');
          _context.next = 26;
          return _index.default.query("CREATE TABLE IF NOT EXISTS comments(\n        id SERIAL PRIMARY KEY,\n        question_id INT NOT NULL,\n        comment TEXT NOT NULL,\n        user_id INT NOT NULL,\n        created_on TIMESTAMPTZ DEFAULT NOW(),\n        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,\n        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE)");

        case 26:
          console.log('Creating votes table...');
          _context.next = 29;
          return _index.default.query("CREATE TABLE IF NOT EXISTS votes(\n        id SERIAL PRIMARY KEY,\n        user_id INT NOT NULL,\n        question_id INT NOT NULL,\n        vote VARCHAR(12) NOT NULL,\n        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,\n        FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE)");

        case 29:
          _context.next = 34;
          break;

        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 31]]);
}))();
//# sourceMappingURL=migrationsCreateTables.js.map