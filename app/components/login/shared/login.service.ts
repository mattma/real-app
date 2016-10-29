import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from './user';

@Injectable()
export class LoginService {
  register (user: User) {
    return (user.email) ?
      Observable.of(user) :
      Observable.throw(new Error('Please, pass an valid username'));
  }

  login (user: User) {
    return (user.email && user.password) ?
      Observable.of(user) :
      Observable.throw(new Error('Invalid username and password'));
  }
}
