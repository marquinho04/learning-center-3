export class PatientEntity {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  photoUrl: string;

  constructor(data: Partial<PatientEntity> = {}) {
    this.id = data.id || 0;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.birthDate = data.birthDate || '';
    this.photoUrl = data.photoUrl || '';
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
