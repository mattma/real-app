import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { DiscoverService } from './shared/discover.service';
import { DiscoverComponent } from './discover.component';
import { routes } from './discover.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    routes
  ],
  declarations: [DiscoverComponent],
  providers: [DiscoverService],
  exports: [DiscoverComponent]
})
export class DiscoverModule {
}
