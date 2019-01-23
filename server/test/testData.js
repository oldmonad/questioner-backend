/* eslint-disable eol-last */

const loginAdmin = {
  email: 'ragnarok@gmail.com',
  password: 'Odin777',
};

const createUser = {
  firstname: 'legolas',
  lastname: 'Aragorn',
  username: 'legoagon',
  email: 'legoagon@gmail.com',
  password: 'Odin',
  confirmPassword: 'Odin',
  phonenumber: '08135266484',
};

const userLogin = {
  email: 'legoagon@gmail.com',
  password: 'Odin',
};

const invalidUser = {
  email: 'gonalons@gmail.com',
  password: 'Bor',
};

const createMeetup = {
  topic: 'Montypoint tech meetup',
  location: 'Yaba, Lagos state',
  date: '1465599344356',
  image: 'heroku.com',
  tags: 'goal yeaah nope',
};

const askQuestion = {
  meetupid: '1',
  title: 'title of question',
  body: 'body of question',
};

export {
  createAdmin,
  loginAdmin,
  createUser,
  userLogin,
  invalidUser,
  createMeetup,
  askQuestion,
};