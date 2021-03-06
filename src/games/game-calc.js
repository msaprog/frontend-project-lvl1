import { play } from '../index.js';
import { getRandom } from '../getrandom.js';

// sixth task
const minNum = 1;
const maxNum = 10;
const minNumSign = 0;
const maxNumSign = 2;
const questionGame = 'What is the result of the expression?';

const getGameTask = () => {
  let rigthAnswer;

  const firstNum = getRandom(minNum, maxNum);
  const secondNum = getRandom(minNum, maxNum);
  const signColl = ['+', '-', '*'];
  const signCollIndex = getRandom(minNumSign, maxNumSign);
  const signStr = signColl[signCollIndex];

  if (signCollIndex === 0) {
    rigthAnswer = firstNum + secondNum;
  } else if (signCollIndex === 1) {
    rigthAnswer = firstNum - secondNum;
  } else {
    rigthAnswer = firstNum * secondNum;
  }

  const task = `${firstNum} ${signStr} ${secondNum}`;

  return [String(rigthAnswer), task];
};

export const startGame = () => play(questionGame, getGameTask);

export default startGame;
