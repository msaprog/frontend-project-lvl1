import { play } from '../index.js';
import { getRandom } from '../getrandom.js';

// eighth task
const minNum = 1;
const maxNum = 50;
const minStep = 1;
const maxStep = 10;
const minNumElements = 5;
const maxNumElements = 15;
const questionGame = 'What number is missing in the progression?';

const generateProgression = (startNum, stepElements, countElements) => {
  const progression = [];
  let firstNumProgression = startNum;
  for (let i = 0; i < countElements; i += 1) {
    progression.push(firstNumProgression);
    firstNumProgression += stepElements;
  }
  return progression;
};

const getGameTask = () => {
  const num = getRandom(minNum, maxNum);
  const step = getRandom(minStep, maxStep);
  const amountOfElements = getRandom(minNumElements, maxNumElements);

  const progression = generateProgression(num, step, amountOfElements);

  const question = getRandom(0, amountOfElements - 1);
  const rigthAnswer = progression[question];
  progression[question] = '..';

  return [String(rigthAnswer), `Question: ${progression.join(' ')}`];
};

export const startGame = () => play(questionGame, getGameTask);

export default startGame;
