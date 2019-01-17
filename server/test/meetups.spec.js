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
  createAdmin,
  loginAdmin,
  createMeetup,
} from './testData';

let adminToken;

describe('Create an admin', async () => {
  await it('Should create an admin', (done) => {
    request(server)
      .post('/api/v1/admin/auth/signup')
      .send(createAdmin)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('Login an admin', async () => {
  await it('Should login an admin', (done) => {
    request(server)
      .post('/api/v1/admin/auth/login')
      .send(loginAdmin)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        adminToken = res.body.token;
        return done();
      });
  });
});


describe('Create Meetups', async () => {
  await it('Should Create a meetup', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .send(createMeetup)
      .set({
        Authorization: `Bearer ${adminToken}`,
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