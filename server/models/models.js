/* eslint-disable eol-last */
import pool from '../db/index';

class UserModel {
  constructor(user) {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.phonenumber = user.phonenumber;
  }

  async newUserSignUp() {
    const text = `INSERT INTO users (firstname, lastname,
      username, email, password,  phonenumber)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING firstname, lastname, username, email, phonenumber`;
    const values = [this.firstname, this.lastname, this.username,
      this.email, this.password, this.phonenumber,
    ];
    const {
      rows,
    } = await pool.query(text, values);
    return rows[0];
  }

  static async findUserByEmail(email) {
    const text = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const {
      rows,
    } = await pool.query(text, values);
    return rows[0];
  }

  static async findUserByUsername(username) {
    const text = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    const {
      rows,
    } = await pool.query(text, values);
    return rows[0];
  }
}

export default UserModel;