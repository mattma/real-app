import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
// import { Page } from 'ui/page';
// import { Color } from 'color';
// import { View } from 'ui/core/view';
// import { TextField } from "ui/text-field";

import { DiscoverService } from './shared/discover.service';
import { ICandadate, ISubnav } from './shared/discover.model';

@Component({
  selector: 'real-home',
  templateUrl: 'components/discover/discover.component.html',
  styleUrls: ['components/discover/discover.css']
})
export class DiscoverComponent implements OnInit {
  public candidates: Array<ICandadate>;
  public subnav: Array<ISubnav>;
  public currentNav = 'today';
  public currentIndex = 0;
  public totalPage: number;

  constructor (private discoverService: DiscoverService) {
  }

  ngOnInit () {
    this.candidates = this.discoverService.getCandidates();
    this.subnav = this.discoverService.getSubNav();

    this.totalPage = this.candidates.length / 2;
  }

  // Event
  setCurrentNav (current: string) {
    if (this.currentNav !== current) {
      this.currentNav = current;
    }
  }

  seeMore () {
    const { currentIndex, totalPage } = this;
    if ((currentIndex + 1) !== totalPage) {
      this.currentIndex = currentIndex + 1;
    }
  }
}
