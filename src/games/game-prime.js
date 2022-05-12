import { play } from '../index.js';
import { getRandom } from '../add.js';

// ninth task
const minNum = 1;
const maxNum = 20;
let num;

const checkPrime = (numCheck) => {
  if (numCheck === 1) {
    return 'no';
  }
  for (let i = 2; i < numCheck; i += 1) {
    if (!(numCheck % i)) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameTask = () => {
  num = getRandom(minNum, maxNum);

  const rigthAnswer = checkPrime(num);

  return [rigthAnswer, `Question: ${num}`];
};

const getPlayerResponse = (answerStr) => {
  if (answerStr === 'yes' && checkPrime(num)) {
    return 'yes';
  } if (answerStr === 'no' && checkPrime(num)) {
    return 'no';
  }
  return answerStr;
};

export const startGame = () => play('Answer "yes" if given number is prime. Otherwise answer "no".', getGameTask, getPlayerResponse);

export default startGame;
