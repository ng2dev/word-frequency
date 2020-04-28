import { Injectable } from '@angular/core';
import { WordFrequency } from './word-frequency';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class WordFrequencyAnalyzer {
  /**
   * Creates an instance of WordFrequencyAnalyzer.
   */
  constructor() {}

  /**
   * @description Gets frequency of word with highest occurrence in text
   * @param text: string
   * @returns frequency
   */
  public calculateHighestFrequency(text: string): number {
    let frequency = 0;

    // lodash chain to derive frequency
    this.sanitizeInput(text)
    .forEach((value: number) => {
      if (value > frequency) {
        frequency = value;
      }
    })
    .value();

    return frequency;
  }

  /**
   * @description Gets frequency of word in text
   * @param text: string
   * @param word: string
   * @returns frequency
   */
  public calculateFrequencyForWord(text: string, word: string): number {
    let frequency = 0;

    // lodash chain to derive frequency for word
    this.sanitizeInput(text)
    .forEach((value: number, key: string) => {
      if (key === word) {
        frequency = value;
      }
    })
    .value();

    return frequency;
  }

  /**
   * @description Gets WordFrequency[] of words greater than n in text
   * @param text: string
   * @param n: number
   * @returns words
   */
  public calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
    const words: WordFrequency[] = [];

    this.sanitizeInput(text)
    .forEach((value: number, key: string) => {
      if (value >= n) {
        words.push(new WordFrequency(key, value));
      }
    })
    .value();

    return _.orderBy(words, 'frequency', 'desc');
  }

  /**
   * @description cleans text from unwanted characters, whitespace and punctuation
   * @param text: string
   * @returns lodash chain
   */
  private sanitizeInput(text: string): any {
    return _
    .chain(this.convert(text))
    .split(' ')
    // removes pronouns
    .remove((f: string) => f.length > 2 )
    .countBy();
  }

  /**
   * @description converts text to lower case and replaces punctuation and numbers with space - then trims excess whitespace
   * @param text: string
   * @returns text
   */
  private convert(text: string): string {
    // this approach aims to preserve 
    // @username, it's, o’clock, id_key, well-organized or #trending
    // expressions without destroying their semantics
    return text
    .toLowerCase()
    .replace(/[\/\]\[\n–,.“”"'`::;><)(}{*=?!&%+|~]/gm, ' ')
    .replace(/\d/gm, ' ')
    .replace(/  /gm, ' ');
  }
}
