#!/usr/bin/env node
import _ from 'lodash';
import { welcome, goodbye, askStr } from '../src/index.js';

// eighth task
const name = welcome();

console.log('What number is missing in the progression?');

const minNumRandom = 1;
const maxNumRandom = 50;
const minStepRandom = 1;
const maxStepRandom = 10;

let countRightAnswer = 0;
let result;
let answer;
let question;

while (countRightAnswer < 3) {
  let num = _.random(minNumRandom, maxNumRandom);
  const step = _.random(minStepRandom, maxStepRandom);
  const progression = [];

  for (let i = 1; i < 11; i += 1) {
    progression.push(num);
    num += step;
  }

  question = _.random(minStepRandom - 1, maxStepRandom - 1);
  result = progression[question];
  progression[question] = '..';

  console.log(`Question: ${progression.join(' ')}`);
  answer = Number(askStr('Your answer: '));

  if (answer === result) {
    console.log('Correct!');
    countRightAnswer += 1;
  } else {
    break;
  }
}

goodbye(name, countRightAnswer, answer, result);
