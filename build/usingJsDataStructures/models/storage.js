"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-return-assign */
var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.meetups = [];
  }

  _createClass(Storage, [{
    key: "create",
    value: function create(data) {
      var tag = data.tags.trim().split(' ');
      var newMeetup = {
        meetupId: this.meetups.length + 1,
        topic: data.topic,
        location: data.location,
        date: data.date,
        tags: tag,
        upcoming: true
      };
      this.meetups.push(newMeetup);
      return newMeetup;
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.meetups;
    }
  }, {
    key: "findOne",
    value: function findOne(meetupId) {
      return this.meetups.find(function (meetup) {
        return meetup.meetupId === meetupId;
      });
    }
  }, {
    key: "findUpcoming",
    value: function findUpcoming() {
      return this.meetups.filter(function (meetup) {
        return meetup.upcoming === true;
      });
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      return this.meetups = [];
    }
  }]);

  return Storage;
}();

var _default = new Storage();

exports.default = _default;
//# sourceMappingURL=storage.js.map