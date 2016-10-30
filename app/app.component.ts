import { Component, OnInit } from '@angular/core';
import { topmost } from "ui/frame";
import { isIOS } from "platform";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'real-app',
  template: `
    <ActionBar class="action-bar-dark">
      <ActionItem ios.position="left" (tap)="navToPage()">
        <Button text="&#xf007;" class="fa"></Button>
      </ActionItem>
      <StackLayout>
        <Label text="Real" class="title"></Label>
      </StackLayout>
      <ActionItem ios.position="right" android.position="popup">
        <Button text="&#xf004;" class="fa"></Button>
      </ActionItem>
    </ActionBar>
    
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor (private routerExtensions: RouterExtensions) {
  }

  ngOnInit () {
    // if iOS, show status bar color in white
    if (isIOS) {
      let navigationBar = topmost().ios.controller.navigationBar;
      navigationBar.barStyle = 1;
    }
  }

  // Event
  navToPage () {
    this.routerExtensions.navigate(['/login'], {
      transition: {
        name: 'slideRight',
        duration: 300,
        curve: 'easeInOut'
      }
    });
  }
}
