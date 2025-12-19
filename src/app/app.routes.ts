/**
 * Author: Chris Newell
 * Date: 2025-12-19
 * File: app.routes.ts
 */

import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, title: 'Home | Portfolio' },
  { path: 'about', component: AboutComponent, title: 'About | Portfolio' },
  { path: 'resume', component: ResumeComponent, title: 'Resume | Portfolio' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | Portfolio' },
  { path: '**', component: NotFoundComponent, title: '404 | Portfolio' },
];
