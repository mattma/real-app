// inspired from those repos
// https://github.com/TheOriginalJosh/nativescript-slides
// https://github.com/TheOriginalJosh/nativescript-ng2-slides
import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';

import { SlidesComponent } from './slides.component';
import { SlideComponent } from './slide.component';

@NgModule({
  imports: [NativeScriptModule],
  declarations: [SlidesComponent, SlideComponent],
  providers: [],
  exports: [SlidesComponent, SlideComponent]
})
export class SlidesModule {
}
