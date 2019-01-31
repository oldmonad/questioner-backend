"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _chai = require("chai");

var _app = _interopRequireDefault(require("../app"));

var _testData = require("./testData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _chai.should)();
var userToken;
describe('Create a user',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          it('A prospective user should be able to create an account', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send(_testData.createUser).set('Accept', 'application/json').expect('Content-Type', /json/).expect(201).end(function (err, res) {
              if (err) return done(err);
              var userid = res.body.data.id;
              var userFirstname = res.body.data.first_name;
              var arrayProp = res.body.data;
              (0, _chai.expect)(res.body.status).to.equal(201);
              (0, _chai.expect)(userid).to.equal(2);
              (0, _chai.expect)(userFirstname).to.equal('legolas');
              arrayProp.should.be.an('object');
              return done();
            });
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
describe('Login an existing User',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          it('A user should be able to login', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/auth/login').send(_testData.userLogin).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, res) {
              if (err) return done(err);
              (0, _chai.expect)(res.body.status).to.equal(200);
              (0, _chai.expect)(res.body).to.be.an('object');
              (0, _chai.expect)(res.body).to.have.property('token');
              userToken = res.body.token;
              return done();
            });
          });
          it('Should throw an error if login is invalid', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/auth/login').send(_testData.invalidUser).set('Accept', 'application/json').expect('Content-Type', /json/).expect(401).end(function (err, res) {
              if (err) return done(err);
              (0, _chai.expect)(res.body.status).to.equal(401);
              (0, _chai.expect)(res.body).to.have.property('error');
              (0, _chai.expect)(res.body.error).to.equal('The credentials you provided is incorrect');
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
describe('Create ask questions',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          it('A user should be able to ask a question', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/questions').send(_testData.askQuestion).set('Accept', 'application/json').set({
              Authorization: "Bearer ".concat(userToken)
            }).expect('Content-Type', /json/).expect(201).end(function (err, res) {
              if (err) return done(err);
              (0, _chai.expect)(res.body.status).to.equal(201);
              return done();
            });
          });

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
})));
describe('Create post comments',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee4() {
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          it('A user should be able to comment on a question', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/comments').send(_testData.postComment).set('Accept', 'application/json').set({
              Authorization: "Bearer ".concat(userToken)
            }).expect('Content-Type', /json/).expect(201).end(function (err, res) {
              if (err) return done(err);
              (0, _chai.expect)(res.body.status).to.equal(201);
              return done();
            });
          });

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this);
})));
//# sourceMappingURL=users.spec.js.map