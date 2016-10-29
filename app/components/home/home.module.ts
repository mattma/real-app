import { NgModule } from '@angular/core';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home.component';
import { routes } from './home.routes';

@NgModule({
  imports: [
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    routes
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {
}
