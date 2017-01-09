import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { RealMainComponent } from './main.component';
import { routes } from './main.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    // routes
  ],
  declarations: [RealMainComponent],
  exports: [RealMainComponent]
})
export class RealMainModule {
}
