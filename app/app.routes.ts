import { Routes } from '@angular/router';

// Routes Definition
// import NotFound404Routes from './+not-found-404/not-found-404.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'test', loadChildren: '+test/test.module#TestModule'},
  // catch all route must be the last one defined
 // ...NotFound404Routes
];
