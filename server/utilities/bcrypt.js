/* eslint-disable eol-last */
import bcrypt from 'bcrypt';

const Bcrypt = {
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },

  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
};
export default Bcrypt;