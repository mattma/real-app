import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SlidesModule } from '../../modules/slides/slides.module';

import { TrainingComponent } from './training.component';
import { routes } from './training.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    SlidesModule,
    routes
  ],
  declarations: [TrainingComponent],
  providers: [],
  exports: [TrainingComponent]
})
export class TrainingModule {
}
