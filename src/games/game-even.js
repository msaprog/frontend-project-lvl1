import { play } from '../index.js';
import { getRandom } from '../add.js';

// fifth task
const minNum = 1;
const maxNum = 100;
let num;

const getGameTask = () => {
  let rigthAnswer;

  num = getRandom(minNum, maxNum);

  if (num % 2 === 0) {
    rigthAnswer = 'yes';
  } else {
    rigthAnswer = 'no';
  }

  return [rigthAnswer, `Question: ${num}`];
};

const getPlayerResponse = (answerStr) => {
  if (answerStr === 'yes' && num % 2 === 0) {
    return 'yes';
  } if (answerStr === 'no' && num % 2 !== 0) {
    return 'no';
  }
  return answerStr;
};

export const startGame = () => play('Answer "yes" if the number is even, otherwise answer "no".', getGameTask, getPlayerResponse);

export default startGame;
