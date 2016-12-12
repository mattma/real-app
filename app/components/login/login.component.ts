import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { RouterExtensions } from 'nativescript-angular';
import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

import { LoginService } from './shared/login.service';
import { User } from './shared/user';

@Component({
  selector: 'real-login',
  templateUrl: 'components/login/login.component.html',
  // By default, it loads up `app.css` without specify
  styleUrls: ['components/login/login-common.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  private user: User;
  private isLoggedIn: boolean = true;

  constructor (private page: Page, private routerExtensions: RouterExtensions, private loginService: LoginService) {
    // this.user = new User();
  }

  private login (auth: string) {
    console.log('auth: ', auth);
    this.routerExtensions.navigate(['/training']);
    // this.loginService.login(this.user)
    //   .subscribe(
    //     (user: User) => {
    //       console.log('successfully logged in');
    //       // this.router.navigate(['/list']
    //     },
    //     (err: Error) => console.log(err)
    //   );
  }

  ngOnInit () {
    this.page.actionBarHidden = true;

    // this command will allow Page image bleed into status bar
    // @TODO background image is repeated, need to figure out how to stop repeated
    // currently use the css to control the background image
    this.page.backgroundSpanUnderStatusBar = true;
    // this.page.backgroundImage = 'res://login-bg';
  }
}
