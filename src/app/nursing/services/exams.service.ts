import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { MentalStateExam } from '../model/mental-state-exam.entity';
import { Examiner } from '../model/examiner.entity';
import { Patient } from '../model/patient.entity';

/**
 * Defines the structure of an enriched exam,
 * including exam data plus its related patient and examiner.
 */
export interface EnrichedExam {
  exam: MentalStateExam;
  patient: Patient;
  examiner: Examiner;
}

/**
 * Service responsible for fetching and assembling mental state exam data
 * by joining exam records with their corresponding patient and examiner.
 */
@Injectable({ providedIn: 'root' })
export class ExamsService {
  // Base URL of the JSON Server API
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves and combines exams, patients, and examiners from the API.
   * Returns a list of enriched exam objects containing all necessary data.
   */
  getEnrichedExams(): Observable<EnrichedExam[]> {
    // Perform parallel requests for all required datasets
    return forkJoin({
      exams: this.http.get<any[]>(`${this.apiUrl}/mental-state-exams`),
      patients: this.http.get<any[]>(`${this.apiUrl}/patients`),
      examiners: this.http.get<any[]>(`${this.apiUrl}/examiners`)
    }).pipe(
      // After all data is fetched, map IDs to full objects and assemble the final list
      map(({ exams, patients, examiners }) => {
        const patientMap = new Map<number, Patient>(
          patients.map(p => [p.id, new Patient(p)])
        );

        const examinerMap = new Map<number, Examiner>(
          examiners.map(e => [e.id, new Examiner(e)])
        );

        // Enrich each exam with its patient and examiner entities
        return exams.map(rawExam => {
          const exam = new MentalStateExam(rawExam);
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
