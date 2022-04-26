import { getRandom, askStr } from '../index.js';

export const taskProgression = () => {
  const minNumRandom = 1;
  const maxNumRandom = 50;
  const minStepRandom = 1;
  const maxStepRandom = 10;

  let countRightAnswer = 0;
  let result;
  let answer;
  let question;

  while (countRightAnswer < 3) {
    let num = getRandom(minNumRandom, maxNumRandom);
    const step = getRandom(minStepRandom, maxStepRandom);
    const progression = [];

    for (let i = 1; i < 11; i += 1) {
      progression.push(num);
      num += step;
    }

    question = getRandom(minStepRandom - 1, maxStepRandom - 1);
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

export default taskProgression;
