import {
  welcome, getRandom, askStr, goodbye,
} from '../index.js';

// sixth task
const taskCalc = () => {
  const minNum = 1;
  const maxNum = 100;
  const minNumSignColl = 0;
  const maxNumSignColl = 2;

  let result;
  let answer;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const firstNum = getRandom(minNum, maxNum);
    const secondNum = getRandom(minNum, maxNum);
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

const name = welcome('What is the result of the expression?');

const { countRightAnswer, answer, result } = taskCalc();

goodbye(name, countRightAnswer, answer, result);
