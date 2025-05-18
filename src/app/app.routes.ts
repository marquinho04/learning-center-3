import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';

const PageNotFound = () => import('./public/pages/page-not-found/page-not-found.component')
  .then(m => m.PageNotFoundComponent);

const MentalStateExams = () => import('./nursing/pages/mental-state-exams/mental-state-exams.component')
  .then(m => m.MentalStateExamsComponent);
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nursing/mental-state-exams', loadComponent: MentalStateExams},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFound }
];
