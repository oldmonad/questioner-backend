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
} from './testData';

should();

let userToken;

describe('Create a user', async () => {
  it('Should create a user', (done) => {
    request(server)
      .post('/api/v1/auth/signup')
      .send(createUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        const userid = res.body.data.id;
        const userFirstname = res.body.data.firstname;
        const arrayProp = res.body.data;
        expect(res.body.status).to.equal(201);
        expect(userid).to.equal(1);
        expect(userFirstname).to.equal('legolas');
        (arrayProp).should.be.an('object');
        return done();
      });
  });
});


describe('Login an existing User', async () => {
  it('Should Login an existing user', (done) => {
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
        // console.log(res.body.token);
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
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal(404);
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('The credentials you provided is incorrect');
        return done();
      });
  });
});