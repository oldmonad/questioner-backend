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
// import user from '../controller/user';
import {
  createUser,
  correctLogin,
  incorrectLogin,
} from './testData';


should();

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