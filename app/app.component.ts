import { Component, OnInit } from '@angular/core';
import { topmost } from 'ui/frame';
import { isIOS } from 'platform';
import * as app from 'application';

declare var android;

@Component({
  selector: 'real-app',
  template: `
    <StackLayout>
      <page-router-outlet></page-router-outlet>
    </StackLayout>
  `
})
export class AppComponent implements OnInit {
  ngOnInit () {
    // if iOS, show status bar color in white
    if (isIOS) {
      topmost().ios.controller.navigationBar.barStyle = 1;
    } else {
      // dark status text over the light status bar background
      let decorView = app.android.startActivity.getWindow().getDecorView();
      decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_LIGHT_STATUS_BAR);
    }
  }
}
