import { Component, OnInit } from '@angular/core';
import { ExamsService, EnrichedExam } from '../../services/exams.service';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-mental-state-exams',
  templateUrl: './mental-state-exams.component.html',
  imports: [
    TranslateModule,
    CommonModule
  ],
  styleUrls: ['./mental-state-exams.component.css']
})
export class MentalStateExamsComponent implements OnInit {
  exams: EnrichedExam[] = [];

  constructor(private examsService: ExamsService) {}

  ngOnInit(): void {
    this.examsService.getEnrichedExams().subscribe(data => {
      console.log('EXAMS LOADED', data);
      this.exams = data;
    });
  }
}
