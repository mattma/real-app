import { Routes } from '@angular/router';

import { trainingRoute } from './components/training/training.routes';
import { loginRoute } from './components/login/login.routes';

import { discoverRoute } from './components/discover/discover.routes';

// Routes Definition
// import NotFound404Routes from './+not-found-404/not-found-404.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/training' },
    ...trainingRoute,
  {
    path: 'real',
    children: [
      ...loginRoute,
      ...discoverRoute,
    ]
  },
  // catch all route must be the last one defined
  // ...NotFound404Routes
];
