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
    var userId = req.body.user;
    var meetup = req.body.meetupId;

    var existingQuestion = _storage.default.findQuestion(req.body.meetupId, parseInt(req.params.questionId));

    var existingUser = _storage.default.findUser(meetup, userId, question);

    if (!existingUser) {
      var userData = {
        user: userId,
        vote: 1
      };

      var voter = _storage.default.updateVoter(meetup, question, userData);

      res.status(201).json({
        status: 201,
        data: voter
      });
    }

    var voteStatus = _storage.default.findVoteStatus(meetup, userId, question);

    console.log(voteStatus);
    res.status(200).json({
      status: 200,
      data: existingUser
    });
  },
  downvote: function downvote(req, res) {}
};
var _default = voteController;
exports.default = _default;
//# sourceMappingURL=vote.js.map