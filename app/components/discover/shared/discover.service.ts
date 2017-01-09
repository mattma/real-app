import { Injectable } from '@angular/core';

import { ICandadate, ISubnav } from './discover.model';

@Injectable()
export class DiscoverService {
  getSubNav (): Array<ISubnav> {
    return [
      { text: 'today' },
      { text: 'past' },
      { text: 'find' },
      { text: 'L.Bot' }
    ];
  }

  getCandidates (): Array<ICandadate> {
    return [{
      socialServices: [
        { service: 'facebook' },
        { service: 'linkedin' }
      ],
      greeting: 'Do you like spinning class?',
      profile: {
        imagePath: 'res://user-2',
        age: '29',
        job: 'Software Engineer',
        height: '6.2 - Cute enough',
        religion: 'Christian',
        employer: 'Apple',
        education: 'UC Berkeley',
        salary: '100K - 120K'
      },
      profileVerification: ['employer', 'education'],
      profileDisplay: ['height', 'religion', 'employer', 'education', 'salary']
    }, {
      socialServices: [
        { service: 'linkedin' }
      ],
      greeting: 'I have two cats :)',
      profile: {
        imagePath: 'res://user-1',
        age: '32',
        job: 'IT Consultant',
        height: '6.1 - Muscular',
        religion: 'Christian',
        employer: 'Google',
        education: 'CMU Master',
        salary: '100K - 150k'
      },
      profileVerification: ['employer', 'education'],
      profileDisplay: ['height', 'religion', 'employer', 'education', 'salary']
    }, {
      socialServices: [
        { service: 'facebook' }
      ],
      greeting: '3rd guy greeting message',
      profile: {
        imagePath: 'res://user-1',
        age: '21',
        job: 'Cool job',
        height: '5.11 - An extra weight',
        religion: 'Christian',
        employer: 'Uber',
        education: 'Stanford',
        salary: '200K - 250k'
      },
      profileVerification: ['employer'],
      profileDisplay: ['height', 'religion', 'employer', 'education', 'salary']
    }, {
      socialServices: [
        { service: 'linkedin' }
      ],
      greeting: '4th guy greeting message',
      profile: {
        imagePath: 'res://user-2',
        age: '28',
        job: 'Awesome job',
        height: '5.8 - Smart',
        religion: 'Christian',
        employer: 'Lyft',
        education: 'Virgina Tech',
        salary: '120K - 140k'
      },
      profileVerification: ['education'],
      profileDisplay: ['height', 'religion', 'employer', 'education', 'salary']
    }, {
      socialServices: [
        { service: 'facebook' }
      ],
      greeting: '5th guy greeting message',
      profile: {
        imagePath: 'res://user-2',
        age: '36',
        job: 'Dream job',
        height: '6.3 - Slim',
        religion: 'Christian',
        employer: 'Salesforce',
        education: 'MIT',
        salary: '125K - 185k'
      },
      profileVerification: ['employer'],
      profileDisplay: ['height', 'religion', 'employer', 'education', 'salary']
    }, {
      socialServices: [
        { service: 'facebook' },
        { service: 'linkedin' }
      ],
      greeting: '6th guy greeting message',
      profile: {
        imagePath: 'res://user-1',
        age: '40',
        job: 'CEO',
        height: '6.7 - Strong',
        religion: 'Christian',
        employer: 'Facebook',
        education: 'Stanford',
        salary: '1M - 3M'
      },
      profileVerification: ['employer', 'education'],
      profileDisplay: ['height', 'religion', 'employer', 'education', 'salary']
    }];
  }
}
