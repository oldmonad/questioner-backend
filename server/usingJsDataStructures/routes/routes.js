/* eslint-disable eol-last */
import meetupsWithObject from '../controller/meetups';
import questionsWithObject from '../controller/questions';
import voteWithObject from '../controller/vote';
import rsvpWithObject from '../controller/rsvp';

const routes = (router) => {
  router.get('/', (req, res) => {
    res.json({
      status: 'Welcome to Home API',
    });
  });

  router.route('/meetups')
    /** POST api/v1/meetups - Create a meetup */
    .post(meetupsWithObject.create);

  router.route('/meetups/:meetupId')
    /** GET api/v1/meetups - Create a meetup */
    .get(meetupsWithObject.getOne);

  router.route('/meetups')
    /** GET api/v1/meetups - Create a meetup */
    .get(meetupsWithObject.getAll);

  router.route('/upcoming/')
    /** GET api/v1/meetups - Create a meetup */
    .get(meetupsWithObject.getUpcoming);

  router.route('/questions')
    /** POST api/v1/question - post a question */
    .post(questionsWithObject.create);

  router.route('/questions/:questionId/upvote')
    /** PATCH api/v1/question/:questionId/upvote - post an upvote */
    .patch(voteWithObject.upvote);

  router.route('/questions/:questionId/downvote')
    /** PATCH api/v1/question - post a question */
    .patch(voteWithObject.downvote);

  router.route('/questions/:questionId/downvote')
    /** PATCH api/v1/question - post a question */
    .post(voteWithObject.downvote);

  router.route('/meetups/:meetupId/rsvps')
    /** PATCH api/v1/question - post a question */
    .post(rsvpWithObject.respond);
};

export default routes;