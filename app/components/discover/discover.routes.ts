import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverComponent } from './discover.component';

const discoverRoutes: Routes = [
  { path: 'discover', component: DiscoverComponent },
];

export const routes: ModuleWithProviders = RouterModule.forChild(discoverRoutes);
