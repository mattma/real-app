import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
// import { Page } from 'ui/page';
// import { Color } from 'color';
// import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

@Component({
  selector: 'real-home',
  templateUrl: 'components/discover/discover.component.html',
  styleUrls: ['components/discover/discover.css']
})
export class DiscoverComponent implements OnInit {
  constructor (private routerExtensions: RouterExtensions) {
  }

  ngOnInit () {
  }
}
