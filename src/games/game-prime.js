import {
  welcome, goodbye, game, askStr,
} from '../index.js';
import { getRandom } from '../add.js';

// ninth task
const minNum = 1;
const maxNum = 20;
let num;
let answerStr;

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

const questionGame = () => {
  num = getRandom(minNum, maxNum);

  console.log(`Question: ${num}`);

  const rigthAnswer = checkPrime(num);

  return rigthAnswer;
};

const answerUser = () => {
  answerStr = askStr('Your answer: ');

  if (answerStr === 'yes' && checkPrime(num)) {
    return 'yes';
  } if (answerStr === 'no' && checkPrime(num)) {
    return 'no';
  }
  return answerStr;
};

const name = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');

const [countRightAnswer, answer, result] = game(questionGame, answerUser);

goodbye(name, countRightAnswer, answer, result);
