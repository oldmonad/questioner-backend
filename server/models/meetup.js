/* eslint-disable class-methods-use-this */
/* eslint-disable eol-last */
import pool from '../db/index';

class Meetup {
  constructor(meetup) {
    this.userId = meetup.id;
    this.topic = meetup.topic;
    this.location = meetup.location;
    this.happeningOn = meetup.happeningOn;
    this.imageUrl = meetup.imageUrl;
  }

  async createMeetup() {
    const queryPlaceholder = `INSERT INTO meetups (user_id, topic, location, happening_on,
      image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const entryValues = [this.userId, this.topic, this.location, this.happeningOn,
      this.imageUrl,
    ];
    const {
      rows,
    } = await pool.query(queryPlaceholder, entryValues);
    return rows[0];
  }

  static async retrieveAllMeetups() {
    const queryPlaceholder = 'SELECT * FROM meetups';
    const {
      rows,
    } = await pool.query(queryPlaceholder);
    return rows;
  }

  static async retrieveSingleMeetup(id) {
    const queryPlaceholder = 'SELECT * FROM meetups WHERE id = $1';
    const queryValues = [id];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows[0];
  }

  static async retrieveUpcomingMeetups(currentDate) {
    const queryPlaceholder = 'SELECT * FROM meetups WHERE happening_on > $1 ORDER BY happening_on';
    const queryValues = [currentDate];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows;
  }

  static async deleteMeetup(id) {
    const queryPlaceholder = 'DELETE FROM meetups WHERE id = $1';
    const queryValues = [id];
    const result = await pool.query(queryPlaceholder, queryValues);
    return result;
  }
}

export default Meetup;

// const statement = `SELECT questions.body, questions.upvotes, questions.downvotes, questions.created_at, ( SELECT row_to_json(users) FROM (SELECT firstname, lastname, id, email FROM users  WHERE ${table}.user_id = users.id) AS users) AS user FROM ${table}  WHERE meetup_id = $1`;
