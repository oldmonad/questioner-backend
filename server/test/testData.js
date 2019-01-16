/* eslint-disable eol-last */
const createUser = {
  firstname: 'legolas',
  lastname: 'Aragorn',
  username: 'legoagon',
  email: 'legoagon@gmail.com',
  password: 'Odin',
  confirmPassword: 'Odin',
  phonenumber: '08135266484',
};

const correctLogin = {
  email: 'legoagon@gmail.com',
  password: 'Odin',
};

const incorrectLogin = {
  email: 'gonalons@gmail.com',
  password: 'Bor',
};


export {
  createUser,
  correctLogin,
  incorrectLogin,
};