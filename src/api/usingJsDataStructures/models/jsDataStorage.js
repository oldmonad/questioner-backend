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
    };
    this.meetups.push(newMeetup);
    return newMeetup;
  }

  findAll() {
    return this.meetups;
  }

  

}


export default new Storage();