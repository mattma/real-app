import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealMainComponent } from './main.component';

const MainRoutes: Routes = [
  { path: 'real', component: RealMainComponent },
];

export const routes: ModuleWithProviders = RouterModule.forChild(MainRoutes);
