/* eslint-disable eol-last */
import pool from '../db/index';

export default class Rsvp {
  constructor(rsvp) {
    this.response = rsvp.response;
  }

  async responseToMeetup(meetupId, userId) {
    const queryPlaceholder = 'INSERT INTO rsvps (meetup_id, user_id, response) VALUES ($1, $2, $3) RETURNING *';
    const queryValues = [meetupId, userId, this.response];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async userResponses(userId, response) {
    const queryPlaceholder = 'SELECT * FROM rsvps WHERE user_id =$1 AND response = $2';
    const queryValues = [userId, response];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows;
  }

  static async getUserByResponse(meetupId, userId) {
    const queryPlaceholder = 'SELECT * FROM rsvps WHERE meetup_id = $1 AND user_id = $2';
    const queryValues = [meetupId, userId];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }
}