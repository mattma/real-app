import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes } from './app.routes';

import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { TrainingModule } from './components/training/training.module';

import { SlideModule } from './modules/slide/slide.module';

export const ApplicationModules = [
  NativeScriptModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes),

  SlideModule,

  HomeModule,
  LoginModule,
  TrainingModule,
];

export const ApplicationServices = [];
