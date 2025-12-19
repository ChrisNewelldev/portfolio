/**
 * Author: Chris Newell
 * Date: 2025-12-19
 * File: resume.component.ts
 */

import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  resumeHref = '/resume.pdf';
  safeResumeUrl: SafeResourceUrl;

  showPreview = true;

  constructor(private sanitizer: DomSanitizer) {
    this.safeResumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.resumeHref);
  }

  togglePreview(): void {
    this.showPreview = !this.showPreview;
  }

  get previewButtonLabel(): string {
    return this.showPreview ? 'Hide preview' : 'Show preview';
  }
}
