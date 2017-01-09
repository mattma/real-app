import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

export const loginRoute: Routes = [
  { path: 'login', component: LoginComponent },
];

export const routes: ModuleWithProviders = RouterModule.forChild(loginRoute);
