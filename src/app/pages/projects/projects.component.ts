/**
 * Author: Chris Newell
 * Date: 2025-12-19
 * File: projects.component.ts
 */

import { Component } from '@angular/core';

type Project = {
  name: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  learned: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Personal Portfolio',
      description: 'This Angular portfolio site.',
      technologies: ['Angular', 'TypeScript', 'GitHub Pages'],
      repoUrl: 'https://github.com/ChrisNewelldev/portfolio',
      learned: 'Routing, components, and deploying a static Angular build to GitHub Pages.',
    },
    {
      name: 'Course Projects (placeholder)',
      description: 'Links to additional coursework projects will be added here.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      learned: 'Iterative development and shipping working assignments.',
    },
  ];
}
