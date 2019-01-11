"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _meetups = _interopRequireDefault(require("../controller/meetups"));

var _rsvp = _interopRequireDefault(require("../controller/rsvp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/', _meetups.default.create);
router.get('/:meetupId', _meetups.default.getOne);
router.get('/', _meetups.default.getAll);
router.get('/upcoming/', _meetups.default.getUpcoming);
router.patch('/:meetupId/rsvps', _rsvp.default.respond);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meetups.js.map