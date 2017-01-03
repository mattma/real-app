import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { StackLayout } from 'ui/layouts/stack-layout';
import * as gestures from 'ui/gestures';

@Component({
  selector: 'slide',
  template: `
    <StackLayout #slideLayout [class]="cssClass">
      <ng-content></ng-content>
    </StackLayout>
	`,
})

export class SlideComponent implements OnInit {
  @ViewChild('slideLayout') slideLayout: ElementRef;
  @Input('class') cssClass: string;

  constructor () {
    this.cssClass = this.cssClass ? this.cssClass : '';
  }

  get layout (): StackLayout {
    return this.slideLayout.nativeElement;
  }

  set slideWidth (width: number) {
    console.log('slideWidth: ', width);
    this.layout.width = width;
  }

  set slideHeight (height: number | string) {
    this.layout.height = <any>height;
  }

  ngOnInit () {
  }
}