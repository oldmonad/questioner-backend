"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _question = _interopRequireDefault(require("../models/question"));

var _comments = _interopRequireDefault(require("../models/comments"));

var _responseformat = require("../utilities/responseformat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var commentsController = {
  createComment: function () {
    var _createComment = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var newComment, checkquestion, latestComment, createdComment;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newComment = req.body;
              _context.next = 3;
              return _question.default.getById(newComment.questionId);

            case 3:
              checkquestion = _context.sent;

              if (checkquestion) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", (0, _responseformat.errorResponse)(res, 404, 'Question does not exist'));

            case 6:
              newComment.userId = req.user.id;
              newComment.comment = newComment.comment.replace(/[^A-Z0-9]/ig, '');
              latestComment = new _comments.default(newComment);
              _context.next = 11;
              return latestComment.createComment();

            case 11:
              createdComment = _context.sent;
              return _context.abrupt("return", (0, _responseformat.successResponse)(res, 201, 'Comment posted', createdComment));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createComment(_x, _x2) {
      return _createComment.apply(this, arguments);
    }

    return createComment;
  }()
};
var _default = commentsController;
exports.default = _default;
//# sourceMappingURL=comments.js.map