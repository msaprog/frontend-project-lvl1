#!/usr/bin/env node
import _ from 'lodash';
import { welcome, askStr } from '../src/index.js';

// sixth task
const name = welcome();

console.log('What is the result of the expression?');

const minNumRandom = 1;
const maxNumRandom = 100;
const minNumSignColl = 0;
const maxNumSignColl = 2;

let countRightAnswer = 0;
let result;
let answer;

while (countRightAnswer < 3) {
  const firstNum = _.random(minNumRandom, maxNumRandom);
  const secondNum = _.random(minNumRandom, maxNumRandom);
  const signColl = ['+', '-', '*'];
  const signCollIndex = _.random(minNumSignColl, maxNumSignColl);
  const signStr = signColl[signCollIndex];

  if (signCollIndex === 0) {
    result = firstNum + secondNum;
  } else if (signCollIndex === 1) {
    result = firstNum - secondNum;
  } else {
    result = firstNum * secondNum;
  }

  console.log(`Question: ${firstNum} ${signStr} ${secondNum}`);
  answer = Number(askStr('Your answer: '));

  if (answer === result) {
    console.log('Correct!');
    countRightAnswer += 1;
  } else {
    break;
  }
}

if (countRightAnswer === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  // ??????????????????????????????????????????
  console.log(`Let's try again, ${name}!`);
}
