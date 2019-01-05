/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
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

describe('Retrive single meetup from meetups', () => {
  before(() => {
    const data1 = {
      topic: 'helping hands from datastructure test 1',
      location: 'ikorodu',
      date: '18 june 1996',
      tags: 'goal yeah',
    };
    const data2 = {
      topic: 'helping hands from datastructure test 2',
      location: 'ikorodu',
      date: '18 june 1996',
      tags: 'goal yeah',
    };
    Store.create(data1);
    Store.create(data2);
  });

  after(() => {
    Store.clearAll();
  });

  it('Should get a single meetup', () => {
    const firstSingleMeetupId = Store.findAll()[0].meetupId;
    const secondSingleMeetupId = Store.findAll()[1].meetupId;
    const firstMeetup = Store.findOne(firstSingleMeetupId);
    const secondMeetup = Store.findOne(secondSingleMeetupId);

    firstMeetup.should.be.an('object');
    secondMeetup.should.be.an('object');
    (firstMeetup.meetupId).should.equal(1);
    (secondMeetup.meetupId).should.equal(2);
  });
});