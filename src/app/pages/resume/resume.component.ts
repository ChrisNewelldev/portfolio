import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  // Uses the app's <base href> so the link works both locally and on GitHub Pages (e.g., /portfolio/)
public readonly resumeHref: string = (() => {
  const baseEl = document.querySelector('base');
  const baseHref = baseEl?.getAttribute('href') ?? '/';
  const normalized = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;
  return `${normalized}resume.pdf`;
})();
}
