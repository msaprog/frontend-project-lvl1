import {
  welcome, getRandom, askStr, goodbye,
} from '../index.js';

// seventh task
const taskGcd = () => {
  const minNum = 1;
  const maxNum = 18;
  let result;
  let answer;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const firstNum = getRandom(minNum, maxNum);
    const secondNum = getRandom(minNum, maxNum);

    if (firstNum > secondNum) {
      result = secondNum;
    } else {
      result = firstNum;
    }
    while (result > 0) {
      if ((secondNum % result === 0) && (firstNum % result === 0)) {
        break;
      } else {
        result -= 1;
      }
    }

    console.log(`Question: ${firstNum} ${secondNum}`);
    answer = Number(askStr('Your answer: '));

    if (answer === result) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      return { countRightAnswer, answer, result };
    }
  }
  return { countRightAnswer, answer, result };
};

const name = welcome('Find the greatest common divisor of given numbers.');

const { countRightAnswer, answer, result } = taskGcd();

goodbye(name, countRightAnswer, answer, result);
