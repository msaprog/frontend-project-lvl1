import {
  welcome, cycle, goodbye,
} from '../index.js';

// eighth task
const minNum = 1;
const maxNum = 50;
const minStep = 1;
const maxStep = 10;

const name = welcome('What number is missing in the progression?');

const { countRightAnswer, answer, result } = cycle(minNum, maxNum, minStep, maxStep, 4);

goodbye(name, countRightAnswer, answer, result);
