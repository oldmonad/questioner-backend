"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

console.log('Dropping tables...');

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _index.default.query('DROP TABLE IF EXISTS users CASCADE');

        case 3:
          _context.next = 5;
          return _index.default.query('DROP TABLE IF EXISTS admin CASCADE');

        case 5:
          _context.next = 7;
          return _index.default.query('DROP TABLE IF EXISTS meetups CASCADE');

        case 7:
          _context.next = 9;
          return _index.default.query('DROP TABLE IF EXISTS questions CASCADE');

        case 9:
          _context.next = 11;
          return _index.default.query('DROP TABLE IF EXISTS comments CASCADE');

        case 11:
          _context.next = 13;
          return _index.default.query('DROP TABLE IF EXISTS rsvps CASCADE');

        case 13:
          _context.next = 15;
          return _index.default.query('DROP TABLE IF EXISTS votes CASCADE');

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 17]]);
}))();
//# sourceMappingURL=migrationsDropTables.js.map