import {
  welcome, getRandom, askStr, goodbye,
} from '../index.js';

// fifth task
const taskEven = () => {
  const minNum = 1;
  const maxNum = 100;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const num = getRandom(minNum, maxNum);
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

const name = welcome('Answer "yes" if the number is even, otherwise answer "no".');

const countRightAnswer = taskEven();

goodbye(name, countRightAnswer, 'yes', 'no');
