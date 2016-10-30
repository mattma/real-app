import { Component, OnInit } from '@angular/core';
import { topmost } from "ui/frame";
import { isIOS } from "platform";

@Component({
  selector: 'real-app',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent implements OnInit {
  ngOnInit () {
    // if iOS, show status bar color in white
    if (isIOS) {
      let navigationBar = topmost().ios.controller.navigationBar;
      navigationBar.barStyle = 1;
    }
  }
}
