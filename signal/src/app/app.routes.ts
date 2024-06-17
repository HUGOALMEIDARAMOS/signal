import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('../tasks/new-task/new-task.component').then( c => c.NewTaskComponent)}
];
