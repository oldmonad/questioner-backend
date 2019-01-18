import pool from '../db/index';

export default class Rsvp {
  constructor(rsvp) {
    this.response = rsvp.response;
  }

  async responseToMeetup(meetupId, userId) {
    const queryPlaceholder = 'INSERT INTO rsvps (meetupid, userid, response) queryValues ($1, $2, $3) RETURNING *';
    const queryValues = [meetupId, userId, this.response];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async allUserResponse(userId, response) {
    const queryPlaceholder = 'SELECT * FROM rsvps WHERE userid =$1 AND response = $2';
    const queryValues = [userId, response];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows;
  }

  static async getRsvpResponse(meetupId, userId) {
    const queryPlaceholder = 'SELECT * FROM rsvps WHERE meetupid = $1 AND userid = $2';
    const queryValues = [meetupId, userId];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }
}