/**
 * Represents a mental state exam performed on a patient.
 * Includes reference IDs, date, and individual score sections.
 */
export class MentalStateExam {
  // Unique exam identifier
  id: number;

  // ID of the patient who took the exam
  patientId: number;

  // ID of the examiner who conducted the exam
  examinerId: number;

  // Date when the exam was performed
  examDate: string;

  // Score for orientation section
  orientationScore: number;

  // Score for registration section
  registrationScore: number;

  // Score for attention and calculation section
  attentionAndCalculationScore: number;

  // Score for recall section
  recallScore: number;

  // Score for language section
  languageScore: number;

  /**
   * Initializes the exam entity with optional data.
   * Default values are set to empty or zero.
   */
  constructor(data: Partial<MentalStateExam> = {}) {
    this.id = data.id || 0;
    this.patientId = data.patientId || 0;
    this.examinerId = data.examinerId || 0;
    this.examDate = data.examDate || '';
    this.orientationScore = data.orientationScore || 0;
    this.registrationScore = data.registrationScore || 0;
    this.attentionAndCalculationScore = data.attentionAndCalculationScore || 0;
    this.recallScore = data.recallScore || 0;
    this.languageScore = data.languageScore || 0;
  }

  /**
   * Calculates the total score by summing all section scores.
   */
  get totalScore(): number {
    return this.orientationScore +
      this.registrationScore +
      this.attentionAndCalculationScore +
      this.recallScore +
      this.languageScore;
  }
}
