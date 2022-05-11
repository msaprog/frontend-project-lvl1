import {
  welcome, goodbye, game, askStr,
} from '../index.js';
import { getRandom } from '../add.js';

// fifth task
const minNum = 1;
const maxNum = 100;
let num;
let answerStr;

const questionGame = () => {
  let rigthAnswer;

  num = getRandom(minNum, maxNum);

  console.log(`Question: ${num}`);

  if (num % 2 === 0) {
    rigthAnswer = 'yes';
  } else {
    rigthAnswer = 'no';
  }

  return rigthAnswer;
};

const answerUser = () => {
  answerStr = askStr('Your answer: ');

  if (answerStr === 'yes' && num % 2 === 0) {
    return 'yes';
  } if (answerStr === 'no' && num % 2 !== 0) {
    return 'no';
  }
  return answerStr;
};

const name = welcome('Answer "yes" if the number is even, otherwise answer "no".');

const [countRightAnswer, answer, result] = game(questionGame, answerUser);

goodbye(name, countRightAnswer, answer, result);
