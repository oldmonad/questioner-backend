/* eslint-disable eol-last */
// import uuid from 'uuid';

class Storage {
  constructor() {
    this.meetups = [];
  }

  create(data) {
    const tag = data.tags.trim().split(' ');
    const newMeetup = {
      id: this.meetups.length + 1,
      topic: data.topic,
      location: data.location,
      date: data.date,
      tags: tag,
      upcoming: true,
    };
    this.meetups.push(newMeetup);
    return newMeetup;
  }

  findAll() {
    return this.meetups;
  }

  findOne(id) {
    return this.meetups.find(meetup => meetup.id === id);
  }

  getUpcoming() {
    return this.meetups.filter(meetup => meetup.upcoming === true);
  }
}


export default new Storage();