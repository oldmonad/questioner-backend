/* eslint-disable eol-last */
import pool from '../db/index';

class Question {
  constructor(question) {
    this.meetupId = question.meetupId;
    this.title = question.title;
    this.body = question.body;
    this.userId = question.userId;
  }

  async post() {
    const queryString = `INSERT INTO questions (meetup_id, title, body, user_id)
    VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [this.meetupId, this.title, this.body, this.userId];
    const {
      rows,
    } = await pool.query(queryString, values);
    return rows[0];
  }

  static async getById(id) {
    const queryPlaceholder = 'SELECT * FROM questions WHERE id = $1';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async upvote(id) {
    const queryPlaceholder = 'UPDATE questions SET up_votes = up_votes + 1 WHERE id = $1 RETURNING *';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async downvote(id) {
    const queryPlaceholder = 'UPDATE questions SET down_votes = down_votes + 1 WHERE id = $1 RETURNING *';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async createVoteRecord(userId, questionId, vote) {
    const queryPlaceholder = `INSERT INTO votes (user_id, question_id, vote) VALUES
    ($1, $2, $3)`;
    const queryValues = [userId, questionId, vote];
    const result = await pool.query(queryPlaceholder, queryValues);
    return result;
  }

  static async balanceUpvoteRecord(id) {
    const queryPlaceholder = 'UPDATE questions SET up_votes = up_votes - 1 WHERE id = $1 RETURNING *';
    const queryValues = [id];
    const result = await pool.query(queryPlaceholder, queryValues);
    return result;
  }

  static async balanceDownvoteRecord(id) {
    const queryPlaceholder = 'UPDATE questions SET down_votes = down_votes - 1 WHERE id = $1 RETURNING *';
    const queryValues = [id];
    const result = await pool.query(queryPlaceholder, queryValues);
    return result;
  }

  static async ifVoted(userId, questionId) {
    const queryPlaceholder = 'SELECT * FROM votes WHERE user_id = $1 AND question_id = $2';
    const queryValues = [userId, questionId];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async userVoteStatus(userId, questionId) {
    const queryPlaceholder = 'SELECT vote FROM votes WHERE user_id = $1 AND question_id = $2';
    const queryValues = [userId, questionId];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async updateVoteStatus(userId, questionId, vote) {
    const queryPlaceholder = `UPDATE votes SET vote='${vote}' WHERE user_id = $1 AND question_id = $2`;
    const queryValues = [userId, questionId];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async deleteVoteRecord(userId, questionId) {
    const queryPlaceholder = 'DELETE FROM votes where user_id = $1 AND question_id = $2';
    const queryValues = [userId, questionId];
    const result = await pool.query(queryPlaceholder, queryValues);
    return result;
  }
}

export default Question;