"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.askQuestion = exports.createMeetup = exports.invalidUser = exports.userLogin = exports.createUser = exports.loginAdmin = exports.createAdmin = void 0;

/* eslint-disable eol-last */
var createAdmin = {
  firstname: 'Thor',
  lastname: 'Ragnar',
  username: 'earlRagnar',
  email: 'ragnarok@gmail.com',
  password: 'Odin777',
  confirmPassword: 'Odin777',
  phonenumber: '08135266484'
};
exports.createAdmin = createAdmin;
var loginAdmin = {
  email: 'ragnarok@gmail.com',
  password: 'Odin777'
};
exports.loginAdmin = loginAdmin;
var createUser = {
  firstname: 'legolas',
  lastname: 'Aragorn',
  username: 'legoagon',
  email: 'legoagon@gmail.com',
  password: 'Odin',
  confirmPassword: 'Odin',
  phonenumber: '08135266484'
};
exports.createUser = createUser;
var userLogin = {
  email: 'legoagon@gmail.com',
  password: 'Odin'
};
exports.userLogin = userLogin;
var invalidUser = {
  email: 'gonalons@gmail.com',
  password: 'Bor'
};
exports.invalidUser = invalidUser;
var createMeetup = {
  topic: 'Montypoint tech meetup',
  location: 'Yaba, Lagos state',
  date: '1465599344356',
  image: 'heroku.com',
  tags: 'goal yeaah nope'
};
exports.createMeetup = createMeetup;
var askQuestion = {
  meetupid: '1',
  title: 'title of question',
  body: 'body of question'
};
exports.askQuestion = askQuestion;
//# sourceMappingURL=testData.js.map