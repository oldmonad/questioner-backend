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
          it('Should create a user', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send(_testData.createUser).set('Accept', 'application/json').expect('Content-Type', /json/).expect(201).end(function (err, res) {
              if (err) return done(err);
              var userid = res.body.data.id;
              var userFirstname = res.body.data.firstname;
              var arrayProp = res.body.data;
              (0, _chai.expect)(res.body.status).to.equal(201);
              (0, _chai.expect)(userid).to.equal(1);
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
          it('Should Login an existing user', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/auth/login').send(_testData.userLogin).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, res) {
              if (err) return done(err);
              (0, _chai.expect)(res.body.status).to.equal(200);
              (0, _chai.expect)(res.body).to.be.an('object');
              (0, _chai.expect)(res.body).to.have.property('token'); // console.log(res.body.token);

              userToken = res.body.token;
              return done();
            });
          });
          it('Should throw an error if login is invalid', function (done) {
            (0, _supertest.default)(_app.default).post('/api/v1/auth/login').send(_testData.invalidUser).set('Accept', 'application/json').expect('Content-Type', /json/).expect(404).end(function (err, res) {
              if (err) return done(err);
              (0, _chai.expect)(res.body.status).to.equal(404);
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
//# sourceMappingURL=users.spec.js.map