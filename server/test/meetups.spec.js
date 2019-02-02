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
  loginAdmin,
  createMeetup,
} from './testData';

let adminToken;

describe('Login an admin', async () => {
  it('Admin should be able to login', (done) => {
    request(server)
      .post('/api/v1/auth/login')
      .send(loginAdmin)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        adminToken = res.body.data.token;
        return done();
      });
  });
});


describe('Create Meetups', async () => {
  it('Admin should be able to create a meetup', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .send(createMeetup)
      .set('Accept', 'application/json')
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

describe('Create Meetups', async () => {
  it('Should throw an error if meetup does not exist', (done) => {
    request(server)
      .get('/api/v1/meetups/15')
      .set('Accept', 'application/json')
      .set({
        Authorization: `Bearer ${adminToken}`,
      })
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal(404);
        return done();
      });
  });
});