import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { Color } from 'color';
import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

import { LoginService } from './shared/login.service';
import { User } from './shared/user';

@Component({
  selector: 'ns-login',
  templateUrl: 'login/login.component.html',
  // By default, it loads up `app.css` without specify
  // styleUrls: ['login/login-common.css', 'login/login.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  private user: User;
  private isLoggedIn: boolean = true;

  constructor (private router: Router, private page: Page, private loginService: LoginService) {
    this.user = new User();
  }

  private toggleDisplay () {
    this.isLoggedIn = !this.isLoggedIn;

    const container: View = this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggedIn ? new Color('white') : new Color('#301217'),
      duration: 200
    });
  }

  private login () {
    this.loginService.login(this.user)
      .subscribe(
        (user: User) => {
          console.log('successfully logged in');
          // this.router.navigate(['/list']
        },
        (err: Error) => console.log(err)
      );
  }

  private signUp () {
    this.loginService.register(this.user)
      .subscribe(
        (user: User) => {
          console.log(`${user.email} was successfully created.`);
          this.toggleDisplay();
        },
        (err: Error) => console.log(err)
      );
  }

  public submit () {
    if (this.isLoggedIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  ngOnInit () {
    this.page.actionBarHidden = true;
    // this.page.backgroundImage = 'res://bg_login';
  }
}
