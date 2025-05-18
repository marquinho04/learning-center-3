/**
 * Represents an examiner in the mental state exam system.
 * Includes identification, name, and national provider number.
 */
export class Examiner {
  // Unique identifier for the examiner
  id: number;

  // Examiner's first name
  firstName: string;

  // Examiner's last name
  lastName: string;

  // Unique NPI (National Provider Identifier)
  nationalProviderIdentifier: string;

  /**
   * Initializes the Examiner entity with optional partial data.
   * Defaults to empty or zero values if not provided.
   */
  constructor(data: Partial<Examiner> = {}) {
    this.id = data.id || 0;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.nationalProviderIdentifier = data.nationalProviderIdentifier || '';
  }

  /**
   * Returns the full name of the examiner.
   */
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
