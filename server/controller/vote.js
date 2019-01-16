/* eslint-disable radix */
/* eslint-disable eol-last */

const voteController = {

  upvote(req, res) {
    const question = parseInt(req.params.questionId);
    const meetup = req.body.meetupId;
    Storage.makeUpvote(meetup, question);
    const votes = Storage.getVotes(meetup, question);
    const singleQuestion = Storage.getQuestion(meetup, question);
    const response = {
      meetup,
      votes,
      title: singleQuestion.title,
      body: singleQuestion.body,
    };
    res.status(200).json({
      status: 200,
      data: [response],
    });
  },

  downvote(req, res) {
    const question = parseInt(req.params.questionId);
    const meetup = req.body.meetupId;
    Storage.makeDownVote(meetup, question);
    const votes = Storage.getVotes(meetup, question);
    const singleQuestion = Storage.getQuestion(meetup, question);
    const response = {
      meetup,
      votes,
      title: singleQuestion.title,
      body: singleQuestion.body,
    };
    res.status(200).json({
      status: 200,
      data: [response],
    });
  },

};

export default voteController;