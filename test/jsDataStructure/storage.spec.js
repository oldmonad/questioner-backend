import {
  expect,
  should,
} from 'chai';

import Store from '../../server/usingJsDataStructures/models/storage';

should();

describe('Meetups Create function', () => {
  before(() => {
    const data = {
      topic: 'helping hands from datastructure test',
      location: 'ikorodu',
      date: '18 june 1996',
      tags: 'goal yeah',
    };
    Store.create(data);
  });

  after(() => {
    Store.clearAll();
  });

  it('It should create a meetup', () => {
    const createdMeetup = Store.findAll()[0];
    createdMeetup.should.be.an('object');
    (createdMeetup.meetupId).should.be.a('number');
    expect(createdMeetup.topic).to.be.a('string');
    expect(createdMeetup.topic).to.equal('helping hands from datastructure test');
    expect(createdMeetup.location).to.be.a('string');
    expect(createdMeetup.location).to.equal('ikorodu');
    (createdMeetup.date).should.be.a('string');
    expect(createdMeetup.date).to.equal('18 june 1996');
    (createdMeetup.tags).should.be.an('array');
    (createdMeetup.upcoming).should.be.be.true;
    // expect(createdMeetup.tags).to.equal(['goal', 'yeah']);
  });


  it('It should create a meetup get upcoming status', () => {
    const createdMeetup = Store.findAll()[0];
    const upcoming = Store.getUpcoming();
    expect(createdMeetup.upcoming).to.be.true;
    expect(createdMeetup.upcoming).to.not.be.false;
    upcoming.should.be.an('array');
  });

  it('Meetups content should be an object', () => {
    const createdMeetup = Store.findAll()[0];
    expect(createdMeetup).to.be.an('object');
    expect(createdMeetup).to.be.an('object');
  });

  it('Meetups should be an array', () => {
    const meetups = Store.findAll();

    meetups.should.be.an('array');
  });
});