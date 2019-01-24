/* eslint-disable eol-last */
/* eslint-disable no-undef */
import request from 'supertest';
import {
  should,
  expect,
  chai,
  assert,
} from 'chai';

import server from '../app';

import {
  createUser,
  userLogin,
  invalidUser,
  askQuestion,
} from './testData';

should();

let userToken;

describe('Create a user', async () => {
  it('A prospective user should be able to create an account', (done) => {
    request(server)
      .post('/api/v1/auth/signup')
      .send(createUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        const userid = res.body.data.id;
        const userFirstname = res.body.data.first_name;
        const arrayProp = res.body.data;
        expect(res.body.status).to.equal(201);
        expect(userid).to.equal(2);
        expect(userFirstname).to.equal('legolas');
        (arrayProp).should.be.an('object');
        return done();
      });
  });
});


describe('Login an existing User', async () => {
  it('A user should be able to login', (done) => {
    request(server)
      .post('/api/v1/auth/login')
      .send(userLogin)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('token');
        userToken = res.body.token;
        return done();
      });
  });

  it('Should throw an error if login is invalid', (done) => {
    request(server)
      .post('/api/v1/auth/login')
      .send(invalidUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal(401);
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('The credentials you provided is incorrect');
        return done();
      });
  });
});


describe('Create ask questions', async () => {
  it('A user should be able to ask a question', (done) => {
    request(server)
      .post('/api/v1/questions')
      .send(askQuestion)
      .set('Accept', 'application/json')
      .set({
        Authorization: `Bearer ${userToken}`,
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal(201);
        return done();
      });
  });
});