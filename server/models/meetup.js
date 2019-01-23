/* eslint-disable class-methods-use-this */
/* eslint-disable eol-last */
import pool from '../db/index';

class Meetup {
  constructor(meetup) {
    this.topic = meetup.topic;
    this.location = meetup.location;
    this.happeningon = meetup.happeningon;
    this.image = meetup.image;
  }

  async createMeetup() {
    const queryPlaceholder = `INSERT INTO meetups (topic, location, happeningon,
      image) VALUES ($1, $2, $3, $4) RETURNING *`;
    const entryValues = [this.topic, this.location, this.happeningon,
      this.image,
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
    const queryPlaceholder = 'SELECT * FROM meetups WHERE happeningon > $1 ORDER BY happeningon';
    const queryValues = [currentDate];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows;
  }
}

export default Meetup;