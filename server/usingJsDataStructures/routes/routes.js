/* eslint-disable eol-last */
import meetupsWithObject from '../controller/meetups';


const routes = (router) => {
  router.get('/', (req, res) => {
    res.json({
      status: 'Welcome to Home API',
    });
  });

  router.route('/meetups')
  /** POST api/v1/meetups - Create a meetup */
    .post(meetupsWithObject.create);
};

export default routes;