import { Component } from '@angular/core';
import { WordFrequencyAnalyzer } from './words-analyzer.service';
import { WordFrequency } from './word-frequency';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {
  n = 2;
  text = '';
  word = '';
  frequencyForWord = 0;
  highestFrequency = 0;
  mostFrequentNWords: WordFrequency[] = [];
  /**
   * Creates an instance of WordsComponent.
   */
  constructor(private analyzer: WordFrequencyAnalyzer) { }

  /**
   * @description binds frequency analysis of input text to view
   * @param text: string
   */
  public analyze(text: string): void {
    this.text = text;
    this.setMostFrequent(this.n);
    this.setFrequencyFor(this.word);
    this.highestFrequency = this.analyzer.calculateHighestFrequency(text);
  }

  /**
   * @description binds frequency for tracked word to view
   * @param word: string
   */
  public setFrequencyFor(word: string): void {
    this.frequencyForWord = this.analyzer.calculateFrequencyForWord(this.text, word);
    this.word = word;
  }

  /**
   * @description sets frequency limit of words to track
   * @param n: number
   */
  public setMostFrequent(n: number): void {
    this.mostFrequentNWords = this.analyzer.calculateMostFrequentNWords(this.text, n);
    this.n = n;
  }
}
