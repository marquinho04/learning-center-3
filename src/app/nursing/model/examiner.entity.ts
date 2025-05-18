export class ExaminerEntity {
  id: number;
  firstName: string;
  lastName: string;
  nationalProviderIdentifier: string;

  constructor(data: Partial<ExaminerEntity> = {}) {
    this.id = data.id || 0;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.nationalProviderIdentifier = data.nationalProviderIdentifier || '';
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
