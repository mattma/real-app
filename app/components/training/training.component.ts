import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import { Color } from 'color';
import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

@Component({
  selector: 'real-training',
  templateUrl: 'components/training/training.component.html',
  // By default, it loads up `app.css` without specify
  styleUrls: ['components/training/training-common.css']
})
export class TrainingComponent implements OnInit {
  constructor (private page: Page, private routerExtensions: RouterExtensions) {
  }

  ngOnInit () {
    this.page.actionBarHidden = true;

    // this command will allow Page image bleed into status bar
    // @TODO background image is repeated, need to figure out how to stop repeated
    // currently use the css to control the background image
    this.page.backgroundSpanUnderStatusBar = true;
    // this.page.backgroundImage = 'res://login-bg';
  }
  
  // Events
  onSkipTraining () {
    this.routerExtensions.navigate(['/login'], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeInOut'
      }
    });
  }
}
