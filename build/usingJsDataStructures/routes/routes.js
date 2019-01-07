"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meetups = _interopRequireDefault(require("../controller/meetups"));

var _questions = _interopRequireDefault(require("../controller/questions"));

var _vote = _interopRequireDefault(require("../controller/vote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */
var routes = function routes(router) {
  router.get('/', function (req, res) {
    res.json({
      status: 'Welcome to Home API'
    });
  });
  router.route('/meetups')
  /** POST api/v1/meetups - Create a meetup */
  .post(_meetups.default.create);
  router.route('/meetups/:meetupId')
  /** GET api/v1/meetups - Create a meetup */
  .get(_meetups.default.getOne);
  router.route('/meetups')
  /** GET api/v1/meetups - Create a meetup */
  .get(_meetups.default.getAll);
  router.route('/upcoming/')
  /** GET api/v1/meetups - Create a meetup */
  .get(_meetups.default.getUpcoming);
  router.route('/questions')
  /** POST api/v1/question - post a question */
  .post(_questions.default.create);
  router.route('/questions/:questionId/upvote')
  /** PATCH api/v1/question/:questionId/upvote - post an upvote */
  .patch(_vote.default.upvote);
  router.route('/questions/:questionId/downvote')
  /** PATCH api/v1/question - post a question */
  .patch(_vote.default.downvote);
};

var _default = routes;
exports.default = _default;
//# sourceMappingURL=routes.js.map