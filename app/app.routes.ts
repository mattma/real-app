import { Routes } from '@angular/router';

import { TrainingComponent } from './components/training/training.component';
import { LoginComponent } from './components/login/login.component';

// Routes Definition
// import NotFound404Routes from './+not-found-404/not-found-404.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/training' },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  // catch all route must be the last one defined
  // ...NotFound404Routes
];
