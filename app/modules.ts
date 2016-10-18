import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes } from './app.routes';

import { LoginModule } from './login/login.module';

export const ApplicationModules = [
  NativeScriptModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes),

  LoginModule
];

export const ApplicationServices = [];
