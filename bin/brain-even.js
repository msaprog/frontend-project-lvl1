#!/usr/bin/env node
import _ from 'lodash';
import { welcome, askStr } from '../src/index.js';

// fifth task
const name = welcome();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const minNumRandom = 1;
const maxNumRandom = 100;

let countRightAnswer = 0;

while (countRightAnswer < 3) {
  const num = _.random(minNumRandom, maxNumRandom);
  console.log(`Question: ${num}`);
  const answer = askStr('Your answer: ');

  if (answer === 'yes' && num % 2 === 0) {
    console.log('Correct!');
    countRightAnswer += 1;
  } else if (answer === 'no' && num % 2 !== 0) {
    console.log('Correct!');
    countRightAnswer += 1;
  } else {
    break;
  }
}

if (countRightAnswer === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
  console.log(`Let's try again, ${name}!`);
}
