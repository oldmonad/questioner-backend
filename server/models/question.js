/* eslint-disable eol-last */
import pool from '../db/index';

class Question {
  constructor(question) {
    this.meetupid = question.meetupid;
    this.title = question.title;
    this.body = question.body;
    this.userid = question.userid;
  }

  async postQuestion() {
    const queryString = `INSERT INTO questions (meetupid, title, body, userid)
    VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [this.meetupid, this.title, this.body, this.userid];
    const {
      rows,
    } = await pool.query(queryString, values);
    return rows[0];
  }

  static async getQuestionById(id) {
    const queryPlaceholder = 'SELECT * FROM questions WHERE id = $1';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async upvoteQuestion(id) {
    const queryPlaceholder = 'UPDATE questions SET upvotes = upvotes + 1 WHERE id = $1 RETURNING *';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async downvoteQuestion(id) {
    const queryPlaceholder = 'UPDATE questions SET downvotes = downvotes + 1 WHERE id = $1 RETURNING *';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async updateVotesTable(userid, questionid, vote) {
    const queryPlaceholder = `INSERT INTO votes (userid, questionid, vote) queryValues
    ($1, $2, $3)`;
    const queryValues = [userid, questionid, vote];
    const result = await pool.query(queryPlaceholder, queryValues);
    return result;
  }

  static async ifVoted(userid, questionid) {
    const queryPlaceholder = 'SELECT * FROM votes WHERE userid = $1 AND questionid = $2';
    const queryValues = [userid, questionid];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }
}

export default Question;