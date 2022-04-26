import { getRandom, askStr } from '../index.js';

export const taskGcd = () => {
  const minNumRandom = 1;
  const maxNumRandom = 18;
  let result;
  let answer;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const firstNum = getRandom(minNumRandom, maxNumRandom);
    const secondNum = getRandom(minNumRandom, maxNumRandom);

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

export default taskGcd;
