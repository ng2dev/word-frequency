import { TestBed } from '@angular/core/testing';

import { WordFrequencyAnalyzer } from './words-analyzer.service';
import { WordFrequency } from './word-frequency';

describe('WordsAnalyzerService', () => {
  let service: WordFrequencyAnalyzer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordFrequencyAnalyzer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate frequency for specific word', () => {
    const text = 'this is a test';
    const word = 'test';
    expect(service.calculateFrequencyForWord(text, word)).toEqual(1);
  });

  it('should keep semantic of special words', () => {
    const text = 'do’s o’clock @tim #trending';
    const expectedFrequency = 1;
    expect(service.calculateMostFrequentNWords(text, expectedFrequency).length).toEqual(4);
  });

  it('should calculate frequency for most occuring word in input text', () => {
    const text = 'this is a test to test behavior';
    const expectedFrequency = 2;
    expect(service.calculateHighestFrequency(text)).toEqual(expectedFrequency);
  });

  it('should calculate frequency for n most occuring words', () => {
    const text = 'this is a test to test behavior';
    const word = 'test';
    const frequency = 2;
    const expected = [];
    expected.push(new WordFrequency(word, frequency));
    expect(service.calculateMostFrequentNWords(text, frequency)).toEqual(expected);
  });

});
