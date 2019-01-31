"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _meetups = _interopRequireDefault(require("../controller/meetups"));

var _rsvp = _interopRequireDefault(require("../controller/rsvp"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

var _validatemeetups = _interopRequireDefault(require("../middleware/validatemeetups"));

var _trycatch = _interopRequireDefault(require("../utilities/trycatch"));

var _validateid = _interopRequireDefault(require("../middleware/validateid"));

var _validatersvps = _interopRequireDefault(require("../middleware/validatersvps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-named-as-default-member */

/* eslint-disable import/no-named-as-default */

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/', _Auth.default.adminAuth, _validatemeetups.default.validCreateMeetup, _validatemeetups.default.checkDate, (0, _trycatch.default)(_meetups.default.createMeetup));
router.get('/upcoming/', (0, _trycatch.default)(_meetups.default.getUpcomingMeetups));
router.get('/:id', _validateid.default, (0, _trycatch.default)(_meetups.default.getSingleMeetup));
router.get('/', (0, _trycatch.default)(_meetups.default.getAllMeetups));
router.patch('/:id/rsvps', _validateid.default, _validatersvps.default.validRsvp, (0, _trycatch.default)(_rsvp.default.respondToRsvp));
router.delete('/:id', _Auth.default.adminAuth, _validateid.default, (0, _trycatch.default)(_meetups.default.deleteMeetup));
var _default = router;
exports.default = _default;
//# sourceMappingURL=meetups.js.map