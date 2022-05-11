import {
  welcome, goodbye, game, askStr,
} from '../index.js';
import { getRandom } from '../add.js';

// eighth task
const minNum = 1;
const maxNum = 50;
const minStep = 1;
const maxStep = 10;
const minNumElements = 5;
const maxNumElements = 15;

let num;
let answerStr;

const progressionGeneration = (startNum, stepElements, countElements) => {
  const progression = [];
  let firstNumProgression = startNum;
  for (let i = 1; i < countElements + 1; i += 1) {
    progression.push(firstNumProgression);
    firstNumProgression += stepElements;
  }
  return progression;
};

const questionGame = () => {
  num = getRandom(minNum, maxNum);
  const step = getRandom(minStep, maxStep);
  const amountOfElements = getRandom(minNumElements, maxNumElements);

  const progression = progressionGeneration(num, step, amountOfElements);

  const question = getRandom(0, amountOfElements - 1);
  const rigthAnswer = progression[question];
  progression[question] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  return rigthAnswer;
};

const answerUser = () => {
  answerStr = askStr('Your answer: ');
  if (Number.isNaN(Number(answerStr))) {
    return answerStr;
  }
  return Number(answerStr);
};

const name = welcome('What number is missing in the progression?');

const [countRightAnswer, answer, result] = game(questionGame, answerUser);

goodbye(name, countRightAnswer, answer, result);
