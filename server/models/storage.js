/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
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
        upVote: 0,
        downVote: 0,
      },
    };
    this.meetups[index].questions.push(newQuestion);
    return newQuestion;
  }

  getQuestion(meetupId, questionId) {
    const meetup = this.findOne(meetupId);
    const index = this.meetups.indexOf(meetup);
    return this.meetups[index].questions
      .find(question => question.questionId === questionId);
  }

  makeUpvote(meetupId, questionId) {
    const meetup = this.findOne(meetupId);
    const index = this.meetups.indexOf(meetup);
    const singleQuestion = this.meetups[index].questions
      .find(question => question.questionId === questionId);
    return singleQuestion.voteLog.upVote += 1;
  }

  makeDownVote(meetupId, questionId) {
    const meetup = this.findOne(meetupId);
    const index = this.meetups.indexOf(meetup);
    const singleQuestion = this.meetups[index].questions
      .find(question => question.questionId === questionId);
    return singleQuestion.voteLog.upVote -= 1;
  }

  getVotes(meetupId, questionId) {
    const meetup = this.findOne(meetupId);
    const index = this.meetups.indexOf(meetup);
    const question = this.meetups[index].questions
      .find(singleQuestion => singleQuestion.questionId === questionId);

    const {
      upVote,
      downVote,
    } = question.voteLog;

    const voteCount = upVote - downVote;
    return voteCount;
  }

  rsvp(meetupId, status) {
    const meetup = this.findOne(meetupId);
    const index = this.meetups.indexOf(meetup);
    return this.meetups[index].questions.status = status;
  }
}


export default new Storage();