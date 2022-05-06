import {
  welcome, cycle, goodbye,
} from '../index.js';

// seventh task
const minNum = 1;
const maxNum = 18;

const name = welcome('Find the greatest common divisor of given numbers.');

const { countRightAnswer, answer, result } = cycle(minNum, maxNum, 0, 0, 3);

goodbye(name, countRightAnswer, answer, result);
