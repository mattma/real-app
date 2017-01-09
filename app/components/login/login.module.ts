import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { LoginComponent } from './login.component';
import { routes } from './login.routes';
import { LoginService } from './shared/login.service';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    // routes
  ],
  declarations: [LoginComponent],
  providers: [LoginService],
  exports: [LoginComponent]
})
export class LoginModule {
}
