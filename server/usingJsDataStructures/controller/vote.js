/* eslint-disable radix */
/* eslint-disable eol-last */
import Storage from '../models/storage';

const voteController = {

  upvote(req, res) {
    const question = parseInt(req.params.questionId);
    // console.log(typeof (question));
    const meetup = req.body.meetupId;
    Storage.makeUpvote(meetup, question);
    // console.log(upvote);
    const votes = Storage.getVotes(meetup, question);
    res.status(200).json({
      status: 200,
      data: votes,
    });
  },

};

export default voteController;