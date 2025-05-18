import { Component, OnInit } from '@angular/core';
import { ExamsService, EnrichedExam } from '../../services/exams.service';

// Modules for internationalization, structural directives, and Material UI
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * Displays a list of mental state exams using Material cards.
 * Fetches and renders data including patient info, examiner details, and total score.
 */
@Component({
  selector: 'app-mental-state-exams',
  standalone: true, // ✅ Since you're using standalone components
  templateUrl: './mental-state-exams.component.html',
  styleUrls: ['./mental-state-exams.component.css'],
  imports: [
    TranslateModule,   // Enables i18n translation pipes in the template
    CommonModule,      // Needed for directives like *ngFor, *ngIf
    MatCard,           // Angular Material Card component
    MatCardContent     // Allows <mat-card-content> usage
  ]
})
export class MentalStateExamsComponent implements OnInit {
  // Holds the list of enriched exam data to be rendered in the template
  exams: EnrichedExam[] = [];

  // Injects the service responsible for fetching exams, patients, and examiners
  constructor(private examsService: ExamsService) {}

  /**
   * Lifecycle hook that triggers on component initialization.
   * Loads enriched exam data and stores it for rendering.
   */
  ngOnInit(): void {
    this.examsService.getEnrichedExams().subscribe(data => {
      console.log('EXAMS LOADED', data); // For debugging in the browser console
      this.exams = data;
    });
  }
}
