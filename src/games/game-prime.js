import { getRandom, askStr } from '../index.js';

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

export const taskPrime = () => {
  const minNumRandom = 1;
  const maxNumRandom = 10;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const num = getRandom(minNumRandom, maxNumRandom);
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

export default taskPrime;
