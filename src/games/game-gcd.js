import { play } from '../index.js';
import { getRandom } from '../getrandom.js';

// seventh task
const minNum = 1;
const maxNum = 18;
const questionGame = 'Find the greatest common divisor of given numbers.';

const findMaxDivisor = (num1, num2) => {
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

const getGameTask = () => {
  const firstNum = getRandom(minNum, maxNum);
  const secondNum = getRandom(minNum, maxNum);
  const maxCommonDivider = findMaxDivisor(firstNum, secondNum);

  const task = `${firstNum} ${secondNum}`;

  return [String(maxCommonDivider), task];
};

export const startGame = () => play(questionGame, getGameTask);

export default startGame;
