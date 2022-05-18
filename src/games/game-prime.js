import { play } from '../index.js';
import { getRandom } from '../getrandom.js';

// ninth task
const minNum = 1;
const maxNum = 20;
const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let num;

const checkPrime = (numCheck) => {
  if (numCheck === 1) {
    return false;
  }
  for (let i = 2; i < numCheck; i += 1) {
    if (!(numCheck % i)) {
      return false;
    }
  }
  return true;
};

const getGameTask = () => {
  let rigthAnswer;

  num = getRandom(minNum, maxNum);

  if (checkPrime(num)) {
    rigthAnswer = 'yes';
  } else {
    rigthAnswer = 'no';
  }

  const task = `${num}`;

  return [rigthAnswer, task];
};

export const startGame = () => play(questionGame, getGameTask);

export default startGame;
