import {
  welcome, getRandom, askStr, goodbye,
} from '../index.js';

// ninth task
const checkPrime = (checkNum) => {
  if (checkNum === 1) {
    return false;
  }
  for (let i = 2; i < checkNum; i += 1) {
    if (!(checkNum % i)) {
      return false;
    }
  }
  return true;
};

const taskPrime = () => {
  const minNum = 1;
  const maxNum = 10;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const num = getRandom(minNum, maxNum);
    console.log(`Question: ${num}`);
    const answer = askStr('Your answer: ');

    if (answer === 'yes' && checkPrime(num)) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else if (answer === 'no' && !checkPrime(num)) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      return countRightAnswer;
    }
  }
  return countRightAnswer;
};

const name = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');

const countRightAnswer = taskPrime();

goodbye(name, countRightAnswer, 'yes', 'no');
