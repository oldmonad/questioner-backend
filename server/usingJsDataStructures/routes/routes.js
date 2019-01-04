/* eslint-disable eol-last */
import meetupsWithObject from '../controller/meetups';

const routes = (router) => {
  router.get('/', (req, res) => {
    res.json({
      status: 'Welcome to Home API',
    });
  });
};

export default routes;