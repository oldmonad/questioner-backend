/* eslint-disable eol-last */
import dotenv from 'dotenv';

dotenv.config();


const loginAdmin = {
  email: 'legolaslegit@gmail.com',
  password: process.env.ADMIN_PASSWORD,
};

const createUser = {
  firstname: 'legolas',
  lastname: 'Aragorn',
  username: 'legogonn',
  email: 'legolasfake@gmail.com',
  password: 'Odinsleep',
  confirmPassword: 'Odinsleep',
  phonenumber: '08135266484',
};

const userLogin = {
  email: 'legolasfake@gmail.com',
  password: 'Odinsleep',
};

const invalidUser = {
  email: 'legolasfake@gmail.com',
  password: 'Odinslee',
};

const createMeetup = {
  topic: 'Montypoint tech meetup',
  location: 'Yaba, Lagos state',
  happeningOn: '2025-01-23T22:00',
  image: 'heroku.com',
};


const askQuestion = {
  meetupId: '1',
  title: 'title of question',
  body: 'body of question',
};

export {
  loginAdmin,
  createUser,
  userLogin,
  invalidUser,
  createMeetup,
  askQuestion,
};