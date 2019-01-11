"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storage = _interopRequireDefault(require("../models/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable radix */

/* eslint-disable eol-last */
var voteController = {
  upvote: function upvote(req, res) {
    var question = parseInt(req.params.questionId);
    var meetup = req.body.meetupId;

    _storage.default.makeUpvote(meetup, question);

    var votes = _storage.default.getVotes(meetup, question);

    var singleQuestion = _storage.default.getQuestion(meetup, question);

    var response = {
      meetup: meetup,
      votes: votes,
      title: singleQuestion.title,
      body: singleQuestion.body
    };
    res.status(200).json({
      status: 200,
      data: [response]
    });
  },
  downvote: function downvote(req, res) {
    var question = parseInt(req.params.questionId);
    var meetup = req.body.meetupId;

    _storage.default.makeDownVote(meetup, question);

    var votes = _storage.default.getVotes(meetup, question);

    var singleQuestion = _storage.default.getQuestion(meetup, question);

    var response = {
      meetup: meetup,
      votes: votes,
      title: singleQuestion.title,
      body: singleQuestion.body
    };
    res.status(200).json({
      status: 200,
      data: [response]
    });
  }
};
var _default = voteController;
exports.default = _default;
//# sourceMappingURL=vote.js.map