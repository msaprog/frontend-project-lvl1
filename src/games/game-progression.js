import {
  welcome, getRandom, askStr, goodbye,
} from '../index.js';

// eighth task
const taskProgression = () => {
  const minNum = 1;
  const maxNum = 50;
  const minStep = 1;
  const maxStep = 10;

  let countRightAnswer = 0;
  let result;
  let answer;
  let question;

  while (countRightAnswer < 3) {
    let num = getRandom(minNum, maxNum);
    const step = getRandom(minStep, maxStep);
    const progression = [];

    for (let i = 1; i < 11; i += 1) {
      progression.push(num);
      num += step;
    }

    question = getRandom(minStep - 1, maxStep - 1);
    result = progression[question];
    progression[question] = '..';

    console.log(`Question: ${progression.join(' ')}`);
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

const name = welcome('What number is missing in the progression?');

const { countRightAnswer, answer, result } = taskProgression();

goodbye(name, countRightAnswer, answer, result);
