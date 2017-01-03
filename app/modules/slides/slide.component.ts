import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { StackLayout } from 'ui/layouts/stack-layout';
import * as gestures from 'ui/gestures';

@Component({
  selector: 'slide',
  encapsulation: ViewEncapsulation.None,
  template: `
    <StackLayout #slideLayout [ngClass]="klass">
      <ng-content></ng-content>
    </StackLayout>
	`,
})

export class SlideComponent implements OnInit {
  @ViewChild('slideLayout') slideLayout: ElementRef;
  @Input() klass: string = '';

  get layout (): StackLayout {
    return this.slideLayout.nativeElement;
  }

  set slideWidth (width: number) {
    this.layout.width = width;
  }

  set slideHeight (height: number | string) {
    this.layout.height = <any>height;
  }

  ngOnInit () {
  }
}
