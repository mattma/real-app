import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
// import { Page } from 'ui/page';
// import { Color } from 'color';
// import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

import { DiscoverService } from './shared/discover.service';
import { ICandadate } from './shared/discover.model';

@Component({
  selector: 'real-home',
  templateUrl: 'components/discover/discover.component.html',
  styleUrls: ['components/discover/discover.css']
})
export class DiscoverComponent implements OnInit {
  public candidates: Array<ICandadate>;

  constructor (private discoverService: DiscoverService) {
  }

  ngOnInit () {
    this.candidates = this.discoverService.getCandidates();
  }
}
