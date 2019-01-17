/* eslint-disable class-methods-use-this */
/* eslint-disable eol-last */
import pool from '../db/index';

class Meetup {
  constructor(meetup) {
    this.topic = meetup.topic;
    this.location = meetup.location;
    this.date = meetup.date;
    this.image = meetup.image;
    this.tags = meetup.tags;
  }

  async createMeetup() {
    const queryPlaceholder = `INSERT INTO meetups (topic, location, date,
      image, tags) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const entryValues = [this.topic, this.location, this.date,
      this.image, this.tags,
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
    const queryPlaceholder = 'SELECT * FROM meetups WHERE date > $1 ORDER BY date';
    const queryValues = [currentDate];
    const {
      rows,
    } = await pool.query(queryPlaceholder, queryValues);
    return rows;
  }
}

export default Meetup;