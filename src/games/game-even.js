import {
  welcome, cycle, goodbye,
} from '../index.js';

// fifth task
const minNum = 1;
const maxNum = 100;

const name = welcome('Answer "yes" if the number is even, otherwise answer "no".');

const { countRightAnswer, answer, result } = cycle(minNum, maxNum, 0, 0, 1);

goodbye(name, countRightAnswer, answer, result);
