import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training.component';

export const trainingRoute: Routes = [
  { path: 'training', component: TrainingComponent },
];

export const routes: ModuleWithProviders = RouterModule.forChild(trainingRoute);
