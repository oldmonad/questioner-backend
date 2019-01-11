"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */

/* eslint-disable no-unused-expressions */

/* eslint-disable eol-last */

/* eslint-disable no-return-assign */
var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.meetups = [];
  }

  _createClass(Storage, [{
    key: "create",
    value: function create(data) {
      var tag = data.tags.trim().split(' ');
      var newMeetup = {
        meetupId: this.meetups.length + 1,
        topic: data.topic,
        location: data.location,
        date: data.date,
        tags: tag,
        questions: [],
        upcoming: true
      };
      this.meetups.push(newMeetup);
      return newMeetup;
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.meetups;
    }
  }, {
    key: "findOne",
    value: function findOne(meetupId) {
      return this.meetups.find(function (meetup) {
        return meetup.meetupId === meetupId;
      });
    }
  }, {
    key: "findUpcoming",
    value: function findUpcoming() {
      return this.meetups.filter(function (meetup) {
        return meetup.upcoming === true;
      });
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      return this.meetups = [];
    }
  }, {
    key: "question",
    value: function question(meetupId, data) {
      var meetup = this.findOne(meetupId);
      var index = this.meetups.indexOf(meetup);
      var newQuestion = {
        questionId: this.meetups[index].questions.length + 1,
        user: data.user,
        meetup: data.meetup,
        title: data.title,
        body: data.body,
        voteLog: {
          upVote: 0,
          downVote: 0
        }
      };
      this.meetups[index].questions.push(newQuestion);
      return newQuestion;
    }
  }, {
    key: "getQuestion",
    value: function getQuestion(meetupId, questionId) {
      var meetup = this.findOne(meetupId);
      var index = this.meetups.indexOf(meetup);
      return this.meetups[index].questions.find(function (question) {
        return question.questionId === questionId;
      });
    }
  }, {
    key: "makeUpvote",
    value: function makeUpvote(meetupId, questionId) {
      var meetup = this.findOne(meetupId);
      var index = this.meetups.indexOf(meetup);
      var singleQuestion = this.meetups[index].questions.find(function (question) {
        return question.questionId === questionId;
      });
      return singleQuestion.voteLog.upVote += 1;
    }
  }, {
    key: "makeDownVote",
    value: function makeDownVote(meetupId, questionId) {
      var meetup = this.findOne(meetupId);
      var index = this.meetups.indexOf(meetup);
      var singleQuestion = this.meetups[index].questions.find(function (question) {
        return question.questionId === questionId;
      });
      return singleQuestion.voteLog.upVote -= 1;
    }
  }, {
    key: "getVotes",
    value: function getVotes(meetupId, questionId) {
      var meetup = this.findOne(meetupId);
      var index = this.meetups.indexOf(meetup);
      var question = this.meetups[index].questions.find(function (singleQuestion) {
        return singleQuestion.questionId === questionId;
      });
      var _question$voteLog = question.voteLog,
          upVote = _question$voteLog.upVote,
          downVote = _question$voteLog.downVote;
      var voteCount = upVote - downVote;
      return voteCount;
    }
  }, {
    key: "rsvp",
    value: function rsvp(meetupId, status) {
      var meetup = this.findOne(meetupId);
      var index = this.meetups.indexOf(meetup);
      return this.meetups[index].questions.status = status;
    }
  }]);

  return Storage;
}();

var _default = new Storage();

exports.default = _default;
//# sourceMappingURL=storage.js.map