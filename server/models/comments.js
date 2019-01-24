/* eslint-disable eol-last */
import pool from '../db/index';

export default class Comment {
  constructor(userComment) {
    this.questionId = userComment.questionId;
    this.title = userComment.title;
    this.body = userComment.body;
    this.comment = userComment.comment;
    this.userId = userComment.userId;
  }

  async createComment() {
    const queryPlaceholder = `INSERT INTO comments (question_id, title, body, comment, user_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const queryValues = [this.questionId, this.title, this.body, this.comment, this.userId];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async getCommentsByQuestion(id) {
    const queryPlaceholder = 'SELECT * FROM comments WHERE questionid = $1';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows;
  }
}