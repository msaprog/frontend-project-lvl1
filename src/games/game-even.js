import { play } from '../index.js';
import { getRandom } from '../getrandom.js';

// fifth task
const minNum = 1;
const maxNum = 100;
const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
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

export const startGame = () => play(questionGame, getGameTask);

export default startGame;
