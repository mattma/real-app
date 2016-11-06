import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
// import { Page } from 'ui/page';
// import { Color } from 'color';
// import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

@Component({
  selector: 'real-home',
  templateUrl: 'components/home/home.component.html',
  styleUrls: ['components/home/home-common.css']
})
export class HomeComponent implements OnInit {
  constructor (private routerExtensions: RouterExtensions) {
  }

  ngOnInit () {
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
