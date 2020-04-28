# Ordina Assignment

This [Angular](https://angular.io/) component implements part of a text processing interface to analyze word frequencies on arbitrary input text.

<img src="https://res.cloudinary.com/dw9lb8j5f/image/upload/v1588045171/2020-04-28_Ordina_ycvqoo.png"
     alt="App preview"
     style="float: left; margin-right: 10px;" />

```ts  
    calculateHighestFrequency(text: string): number
    calculateFrequencyForWord(text: string, word: string): number
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[]
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload

## Build

Run `ng build` to build the project. The build artifacts will be stored in `dist/` 
Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
