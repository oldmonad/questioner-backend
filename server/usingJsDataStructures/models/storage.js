/* eslint-disable eol-last */
/* eslint-disable no-return-assign */
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
      questions: [],
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

  findUpcoming() {
    return this.meetups.filter(meetup => meetup.upcoming === true);
  }

  clearAll() {
    return this.meetups = [];
  }

  question(meetupId, data) {
    const meetup = this.findOne(meetupId);
    const index = this.meetups.indexOf(meetup);
    const newQuestion = {
      questionId: this.meetups[index].questions.length + 1,
      user: data.user,
      meetup: data.meetup,
      title: data.title,
      body: data.body,
      voteLog: {
        voteCount: 0,
        voters: [],
      },
    };
    this.meetups[index].questions.push(newQuestion);
    return newQuestion;
  }

  upvote() {

  }
}


export default new Storage();