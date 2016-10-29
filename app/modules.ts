import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes } from './app.routes';

import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';

export const ApplicationModules = [
  NativeScriptModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes),

  HomeModule,
  LoginModule
];

export const ApplicationServices = [];
