/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import request from 'supertest';
import {
  should,
  expect,
  chai,
  assert,
} from 'chai';

import server from '../../server/server';

import Store from '../../server/usingJsDataStructures/models/storage';

should();

describe('Create Meetup API', () => {
  const data = {
    topic: 'helping hands',
    location: 'ikorodu',
    date: '18 june 1996',
    tags: 'goal yeah',
  };

  it('Should create a meetup', (done) => {
    request(server)
      .post('/api/v1/meetups')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        expect(res.body.data[0]).to.have.property('meetupId');
        expect(res.body.data[0].meetupId).to.equal(1);
        expect(res.body.data[0]).to.have.property('topic');
        expect(res.body.data[0].topic).to.equal('helping hands');
        expect(res.body.data[0]).to.have.property('location');
        expect(res.body.data[0].location).to.equal('ikorodu');
        expect(res.body.data[0]).to.have.property('date');
        expect(res.body.data[0].date).to.equal('18 june 1996');
        expect(res.body.data[0]).to.have.property('tags');
        // expect(res.body.data[0].tags).to.equal(['goal', 'yeah']);
        expect(res.body.data[0].tags).to.be.an('array');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.equal(201);
        Store.clearAll();
        done();
      });
  });
});