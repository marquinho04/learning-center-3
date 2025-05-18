export class MentalStateExamEntity {
  id: number;
  patientId: number;
  examinerId: number;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;

  constructor(data: Partial<MentalStateExamEntity> = {}) {
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

  get totalScore(): number {
    return this.orientationScore + this.registrationScore +
      this.attentionAndCalculationScore + this.recallScore +
      this.languageScore;
  }
}
