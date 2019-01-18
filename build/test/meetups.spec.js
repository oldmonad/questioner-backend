"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _chai = require("chai");

var _app = _interopRequireDefault(require("../app"));

var _testData = require("./testData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var adminToken;
describe('Create an admin',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return it('Should create an admin', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/admin/auth/signup').send(_testData.createAdmin).set('Accept', 'application/json').expect('Content-Type', /json/).expect(201).end(function (err, res) {
              if (err) return done(err);
              return done();
            });
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
describe('Login an admin',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return it('Should login an admin', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/admin/auth/login').send(_testData.loginAdmin).set('Accept', 'application/json').expect('Content-Type', /json/).end(function (err, res) {
              if (err) return done(err);
              adminToken = res.body.token;
              return done();
            });
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
})));
describe('Create Meetups',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return it('Should Create a meetup', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/meetups').send(_testData.createMeetup).set({
              Authorization: "Bearer ".concat(adminToken)
            }).expect('Content-Type', /json/).expect(201).end(function (err, res) {
              if (err) return done(err);
              (0, _chai.expect)(res.body.status).to.equal(201);
              return done();
            });
          });

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
})));
//# sourceMappingURL=meetups.spec.js.map