/* eslint-disable radix */
/* eslint-disable eol-last */


const questionController = {
  create(req, res) {
    const meetupId = req.body.meetup;
    const data = req.body;
    const createdQuestion = Storage.question(meetupId, data);
    const response = {
      questionId: createdQuestion.questionId,
      user: createdQuestion.user,
      meetup: createdQuestion.meetup,
      title: createdQuestion.title,
      body: createdQuestion.body,
    };
    return res.status(201).json({
      status: 201,
      data: [response],
    });
  },
};

export default questionController;