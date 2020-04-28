export class WordFrequency {
  word: string;
  frequency: number;

  /**
   * Creates an instance of WordFrequency.
   */
  constructor(word: string, frequency: number) {
    this.word = word;
    this.frequency = frequency;
  }

  /**
   * getWord
   * gets word
   * @returns word
   */
  public getWord(): string {
    return this.word;
  }

  /**
   * getFrequency
   * gets frequency of word
   * @returns frequency
   */
  public getFrequency(): number {
    return this.frequency;
  }
}
