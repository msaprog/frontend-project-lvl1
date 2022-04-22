#!/usr/bin/env node
import _ from 'lodash';
import { welcome, goodbye, askStr } from '../src/index.js';

// seventh task
const name = welcome();

console.log('Find the greatest common divisor of given numbers.');

const minNumRandom = 1;
const maxNumRandom = 18;

let countRightAnswer = 0;
let result;
let answer;

while (countRightAnswer < 3) {
  const firstNum = _.random(minNumRandom, maxNumRandom);
  const secondNum = _.random(minNumRandom, maxNumRandom);

  if (firstNum > secondNum) {
    result = secondNum;
  } else {
    result = firstNum;
  }
  while (result > 0) {
    if ((secondNum % result === 0) && (firstNum % result === 0)) {
      break;
    } else {
      result -= 1;
    }
  }

  console.log(`Question: ${firstNum} ${secondNum}`);
  answer = Number(askStr('Your answer: '));

  if (answer === result) {
    console.log('Correct!');
    countRightAnswer += 1;
  } else {
    break;
  }
}

goodbye(name, countRightAnswer, answer, result);
