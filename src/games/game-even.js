import { getRandom, askStr } from '../index.js';

export const taskEven = () => {
  const minNumRandom = 1;
  const maxNumRandom = 100;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const num = getRandom(minNumRandom, maxNumRandom);
    console.log(`Question: ${num}`);
    const answer = askStr('Your answer: ');

    if (answer === 'yes' && num % 2 === 0) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else if (answer === 'no' && num % 2 !== 0) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      return countRightAnswer;
    }
  }
  return countRightAnswer;
};

export default taskEven;
