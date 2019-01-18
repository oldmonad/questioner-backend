"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidation = _interopRequireDefault(require("express-validation"));

var _meetups = _interopRequireDefault(require("../controller/meetups"));

var _rsvp = _interopRequireDefault(require("../controller/rsvp"));

var _validator = _interopRequireDefault(require("../middleware/validator/validator"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-named-as-default-member */

/* eslint-disable import/no-named-as-default */

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/', _Auth.default.verifyToken, _Auth.default.adminAuth, (0, _expressValidation.default)(_validator.default.createMeetup), _meetups.default.createMeetup);
router.get('/upcoming/', _Auth.default.verifyToken, _meetups.default.getUpcomingMeetups);
router.get('/:meetupId', _Auth.default.verifyToken, (0, _expressValidation.default)(_validator.default.getMeetup), _meetups.default.getUpcomingMeetups);
router.get('/', _Auth.default.verifyToken, _meetups.default.getAllMeetups);
router.patch('/:meetupId/rsvps', _Auth.default.verifyToken, (0, _expressValidation.default)(_validator.default.rsvps), _rsvp.default.respondToRsvp);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meetups.js.map