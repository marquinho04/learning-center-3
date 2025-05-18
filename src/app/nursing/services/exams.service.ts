import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { MentalStateExamEntity } from '../model/mental-state-exam.entity';
import { ExaminerEntity } from '../model/examiner.entity';
import { PatientEntity } from '../model/patient.entity';

export interface EnrichedExam {
  exam: MentalStateExamEntity;
  patient: PatientEntity;
  examiner: ExaminerEntity;
}

@Injectable({ providedIn: 'root' })
export class ExamsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEnrichedExams(): Observable<EnrichedExam[]> {
    return forkJoin({
      exams: this.http.get<any[]>(`${this.apiUrl}/mental-state-exams`),
      patients: this.http.get<any[]>(`${this.apiUrl}/patients`),
      examiners: this.http.get<any[]>(`${this.apiUrl}/examiners`)
    }).pipe(
      map(({ exams, patients, examiners }) => {
        const patientMap = new Map<number, PatientEntity>(
          patients.map(p => [p.id, new PatientEntity(p)])
        );
        const examinerMap = new Map<number, ExaminerEntity>(
          examiners.map(e => [e.id, new ExaminerEntity(e)])
        );

        return exams.map(rawExam => {
          const exam = new MentalStateExamEntity(rawExam);
          return {
            exam,
            patient: patientMap.get(exam.patientId)!,
            examiner: examinerMap.get(exam.examinerId)!
          };
        });
      })
    );
  }
}
