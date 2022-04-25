import _ from 'lodash';
import readlineSync from 'readline-sync';

const askStr = (ask) => {
  const str = readlineSync.question(ask);
  return str;
};

const checkPrime = (checkNum) => {
  if (checkNum === 1) {
    return false;
  }
  for (let i = 2; i < checkNum; i += 1) {
    if (!(checkNum % i)) {
      return false;
    }
  }
  return true;
};

// all task
export const welcome = (info) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = askStr('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(info);
  return nameUser;
};

// all task
export const goodbye = (name, countRightAnswer, wrong, right) => {
  if (countRightAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${right}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export const taskEven = () => {
  const minNumRandom = 1;
  const maxNumRandom = 100;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const num = _.random(minNumRandom, maxNumRandom);
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

export const taskCalc = () => {
  const minNumRandom = 1;
  const maxNumRandom = 100;
  const minNumSignColl = 0;
  const maxNumSignColl = 2;

  let result;
  let answer;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const firstNum = _.random(minNumRandom, maxNumRandom);
    const secondNum = _.random(minNumRandom, maxNumRandom);
    const signColl = ['+', '-', '*'];
    const signCollIndex = _.random(minNumSignColl, maxNumSignColl);
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

export const taskGcd = () => {
  const minNumRandom = 1;
  const maxNumRandom = 18;
  let result;
  let answer;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const firstNum = _.random(minNumRandom, maxNumRandom);
    const secondNum = _.random(minNumRandom, maxNumRandom);

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
    let num = _.random(minNumRandom, maxNumRandom);
    const step = _.random(minStepRandom, maxStepRandom);
    const progression = [];

    for (let i = 1; i < 11; i += 1) {
      progression.push(num);
      num += step;
    }

    question = _.random(minStepRandom - 1, maxStepRandom - 1);
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

export const taskPrime = () => {
  const minNumRandom = 1;
  const maxNumRandom = 10;
  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const num = _.random(minNumRandom, maxNumRandom);
    console.log(`Question: ${num}`);
    const answer = askStr('Your answer: ');

    if (answer === 'yes' && checkPrime(num)) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else if (answer === 'no' && !checkPrime(num)) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      return countRightAnswer;
    }
  }
  return countRightAnswer;
};
