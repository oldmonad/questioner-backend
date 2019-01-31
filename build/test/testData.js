"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postComment = exports.askQuestion = exports.createMeetup = exports.invalidUser = exports.userLogin = exports.createUser = exports.loginAdmin = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */
_dotenv.default.config();

var loginAdmin = {
  email: 'legolaslegit@gmail.com',
  password: process.env.ADMIN_PASSWORD
};
exports.loginAdmin = loginAdmin;
var createUser = {
  firstname: 'legolas',
  lastname: 'Aragorn',
  username: 'legogonn',
  email: 'legolasfake@gmail.com',
  password: 'Odinsleep',
  confirmPassword: 'Odinsleep',
  phonenumber: '08135266484'
};
exports.createUser = createUser;
var userLogin = {
  email: 'legolasfake@gmail.com',
  password: 'Odinsleep'
};
exports.userLogin = userLogin;
var invalidUser = {
  email: 'legolasfake@gmail.com',
  password: 'Odinslee'
};
exports.invalidUser = invalidUser;
var createMeetup = {
  topic: 'Montypoint tech meetup',
  location: 'Yaba, Lagos state',
  happeningOn: '2025-01-23T22:00',
  image: 'heroku.com'
};
exports.createMeetup = createMeetup;
var askQuestion = {
  meetupId: '1',
  title: 'title of question',
  body: 'body of question'
};
exports.askQuestion = askQuestion;
var postComment = {
  questionId: '1',
  comment: 'comment'
};
exports.postComment = postComment;
//# sourceMappingURL=testData.js.map