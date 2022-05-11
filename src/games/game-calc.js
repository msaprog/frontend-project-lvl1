import {
  welcome, goodbye, game, askStr,
} from '../index.js';
import { getRandom } from '../add.js';

// sixth task
const minNum = 1;
const maxNum = 10;
const minNumSign = 0;
const maxNumSign = 2;
let answerStr;

const questionGame = () => {
  let rightAnswer;

  const firstNum = getRandom(minNum, maxNum);
  const secondNum = getRandom(minNum, maxNum);
  const signColl = ['+', '-', '*'];
  const signCollIndex = getRandom(minNumSign, maxNumSign);
  const signStr = signColl[signCollIndex];

  console.log(`Question: ${firstNum} ${signStr} ${secondNum}`);

  if (signCollIndex === 0) {
    rightAnswer = firstNum + secondNum;
  } else if (signCollIndex === 1) {
    rightAnswer = firstNum - secondNum;
  } else {
    rightAnswer = firstNum * secondNum;
  }

  return rightAnswer;
};

const answerUser = () => {
  answerStr = askStr('Your answer: ');
  if (Number.isNaN(Number(answerStr))) {
    return answerStr;
  }
  return Number(answerStr);
};

const name = welcome('What is the result of the expression?');

const [countRightAnswer, answer, result] = game(questionGame, answerUser);

goodbye(name, countRightAnswer, answer, result);
