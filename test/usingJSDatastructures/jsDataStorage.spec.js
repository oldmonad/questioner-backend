/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
import {
  expect,
  should,
} from 'chai';

import DataStore from '../../src/api/usingJsDataStructures/models/jsDataStorage';

should();

describe('#Meetups Storage', () => {
  it('It should create a meetup', () => {
    const data = {
      topic: 'helping hands',
      location: 'ikorodu',
      date: '18 june 1996',
      tags: 'goal yeah',
    };

    const createdMeetup = DataStore.create(data);
    createdMeetup.should.be.an('object');
    (createdMeetup.id).should.be.a('number');
    expect(createdMeetup.topic).to.be.a('string');
    expect(createdMeetup.topic).to.equal('helping hands');
    expect(createdMeetup.location).to.be.a('string');
    expect(createdMeetup.location).to.equal('ikorodu');
    (createdMeetup.date).should.be.a('string');
    expect(createdMeetup.date).to.equal('18 june 1996');
    (createdMeetup.tags).should.be.an('array');
    (createdMeetup.upcoming).should.be.be.true;
    // expect(createdMeetup.tags).to.equal(['goal', 'yeah']);
  });

  it('Meetups should be an array', () => {
    const meetups = DataStore.findAll();

    meetups.should.be.an('array');
  });


  it('It should create a meetup', () => {
    const data = {
      topic: 'helping hands',
      location: 'ikorodu',
      date: '18 june 1996',
      tags: 'goal yeah',
    };

    const createdMeetup = DataStore.create(data);
    const upcoming = DataStore.getUpcoming();
    expect(createdMeetup.upcoming).to.be.true;
    expect(createdMeetup.upcoming).to.not.be.false;
    upcoming.should.be.an('array');
  });
});