/* eslint-disable eol-last */
const createAdmin = {
  firstname: 'Thor',
  lastname: 'Ragnar',
  username: 'earlRagnar',
  email: 'ragnarok@gmail.com',
  password: 'Odin777',
  confirmPassword: 'Odin777',
  phonenumber: '08135266484',
};

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

export {
  createAdmin,
  loginAdmin,
  createUser,
  userLogin,
  invalidUser,
  createMeetup,
};