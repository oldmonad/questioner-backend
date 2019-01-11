"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storage = _interopRequireDefault(require("../models/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable radix */

/* eslint-disable eol-last */
var questionController = {
  create: function create(req, res) {
    var meetupId = req.body.meetup;
    var data = req.body;

    var createdQuestion = _storage.default.question(meetupId, data);

    return res.status(201).json({
      status: 201,
      data: createdQuestion
    });
  }
};
var _default = questionController;
exports.default = _default;
//# sourceMappingURL=questions.js.map