import { play } from '../index.js';
import { getRandom } from '../getrandom.js';

// ninth task
const minNum = 1;
const maxNum = 20;
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

  return [rigthAnswer, `Question: ${num}`];
};

export const startGame = () => play('Answer "yes" if given number is prime. Otherwise answer "no".', getGameTask);

export default startGame;
