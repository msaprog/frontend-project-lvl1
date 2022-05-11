import {
  welcome, goodbye, game, askStr,
} from '../index.js';
import { getRandom } from '../add.js';

// seventh task
const minNum = 1;
const maxNum = 18;
let firstNum;
let secondNum;
let answerStr;

const maxGeneralDivisor = (num1, num2) => {
  let result;
  if (num1 > num2) {
    result = num2;
  } else {
    result = num1;
  }
  while (result > 0) {
    if ((num2 % result === 0) && (num1 % result === 0)) {
      return result;
    }
    result -= 1;
  }
  return result;
};

const questionGame = () => {
  firstNum = getRandom(minNum, maxNum);
  secondNum = getRandom(minNum, maxNum);

  console.log(`Question: ${firstNum} ${secondNum}`);

  return maxGeneralDivisor(firstNum, secondNum);
};

const answerUser = () => {
  answerStr = askStr('Your answer: ');
  if (Number.isNaN(Number(answerStr))) {
    return answerStr;
  }
  return Number(answerStr);
};

const name = welcome('Find the greatest common divisor of given numbers.');

const [countRightAnswer, answer, result] = game(questionGame, answerUser);

goodbye(name, countRightAnswer, answer, result);
