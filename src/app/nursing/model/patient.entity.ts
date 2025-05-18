/**
 * Represents a patient who participates in mental state exams.
 * Includes personal identification and profile information.
 */
export class Patient {
  // Unique identifier for the patient
  id: number;

  // Patient's first name
  firstName: string;

  // Patient's last name
  lastName: string;

  // Date of birth in ISO format (yyyy-mm-dd)
  birthDate: string;

  // URL to the patient's profile photo
  photoUrl: string;

  /**
   * Initializes the patient entity with optional partial data.
   * Defaults are empty strings or 0 when values are not provided.
   */
  constructor(data: Partial<Patient> = {}) {
    this.id = data.id || 0;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.birthDate = data.birthDate || '';
    this.photoUrl = data.photoUrl || '';
  }

  /**
   * Returns the full name of the patient.
   */
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
