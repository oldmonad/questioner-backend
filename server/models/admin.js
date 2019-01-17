/* eslint-disable eol-last */
import pool from '../db/index';

class AdminModel {
  constructor(user) {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.phonenumber = user.phonenumber;
  }

  async newAdminSignUp() {
    const queryPlaceholder = `INSERT INTO admin (firstname, lastname,
      username, email, password,  phonenumber)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, firstname, lastname, username, email, phonenumber`;
    const values = [this.firstname, this.lastname, this.username,
      this.email, this.password, this.phonenumber,
    ];
    const {
      rows,
    } = await pool.query(queryPlaceholder, values);
    return rows[0];
  }

  static async findAdminByEmail(email) {
    const queryPlaceholder = 'SELECT * FROM admin WHERE email = $1';
    const values = [email];
    const {
      rows,
    } = await pool.query(queryPlaceholder, values);
    return rows[0];
  }

  static async findAdminByUsername(username) {
    const queryPlaceholder = 'SELECT * FROM admin WHERE username = $1';
    const values = [username];
    const {
      rows,
    } = await pool.query(queryPlaceholder, values);
    return rows[0];
  }
}

export default AdminModel;