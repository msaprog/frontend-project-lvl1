import {
  welcome, cycle, goodbye,
} from '../index.js';

// sixth task
const minNum = 1;
const maxNum = 10;
const minNumSign = 0;
const maxNumSign = 2;

const name = welcome('What is the result of the expression?');

const { countRightAnswer, answer, result } = cycle(minNum, maxNum, minNumSign, maxNumSign, 2);

goodbye(name, countRightAnswer, answer, result);
