import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { Color } from 'color';
import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

@Component({
  selector: 'real-home',
  templateUrl: 'components/home/home.component.html',
  // styleUrls: ['components/home/home-common.css']
})
export class HomeComponent implements OnInit {
  constructor (private router: Router, private page: Page) {
  }

  ngOnInit () {
  }
}
