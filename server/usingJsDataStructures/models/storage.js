class Storage {
  constructor() {
    this.meetups = [];
  }

  create(data) {
    const tag = data.tags.trim().split(' ');
    const newMeetup = {
      meetupId: this.meetups.length + 1,
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

  findOne(meetupId) {
    return this.meetups.find(meetup => meetup.meetupId === meetupId);
  }

  getUpcoming() {
    return this.meetups.filter(meetup => meetup.upcoming === true);
  }

  clearAll() {
    return this.meetups = [];
  }
}


export default new Storage();