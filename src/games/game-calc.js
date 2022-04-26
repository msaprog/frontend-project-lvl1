import { getRandom, askStr } from '../index.js';

export const taskCalc = () => {
  const minNumRandom = 1;
  const maxNumRandom = 100;
  const minNumSignColl = 0;
  const maxNumSignColl = 2;

  let result;
  let answer;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const firstNum = getRandom(minNumRandom, maxNumRandom);
    const secondNum = getRandom(minNumRandom, maxNumRandom);
    const signColl = ['+', '-', '*'];
    const signCollIndex = getRandom(minNumSignColl, maxNumSignColl);
    const signStr = signColl[signCollIndex];

    if (signCollIndex === 0) {
      result = firstNum + secondNum;
    } else if (signCollIndex === 1) {
      result = firstNum - secondNum;
    } else {
      result = firstNum * secondNum;
    }

    console.log(`Question: ${firstNum} ${signStr} ${secondNum}`);
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

export default taskCalc;
