import { Routes } from '@angular/router';

import { TrainingComponent } from './components/training/training.component';
import { LoginComponent } from './components/login/login.component';
import { DiscoverComponent } from './components/discover/discover.component';

// Routes Definition
// import NotFound404Routes from './+not-found-404/not-found-404.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/discover' },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'discover', component: DiscoverComponent },
  // catch all route must be the last one defined
  // ...NotFound404Routes
];
