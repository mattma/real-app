import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

export const routes: ModuleWithProviders = RouterModule.forChild(loginRoutes);
