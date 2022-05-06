import {
  welcome, cycle, goodbye,
} from '../index.js';

// ninth task
const minNum = 1;
const maxNum = 20;

const name = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');

const { countRightAnswer, answer, result } = cycle(minNum, maxNum, 0, 0, 1);

goodbye(name, countRightAnswer, answer, result);
