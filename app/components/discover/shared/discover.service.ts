import { Injectable } from '@angular/core';

import { ICandadate } from './discover.model';

@Injectable()
export class DiscoverService {
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
    }];
  }
}
