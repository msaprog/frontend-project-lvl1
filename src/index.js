import readlineSync from 'readline-sync';
import { getRandom } from './add.js';

// task prime
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
export const askStr = (ask) => {
  const str = readlineSync.question(ask);
  return str;
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

// task gcd
const divider = (firstNum, secondNum) => {
  let result;
  if (firstNum > secondNum) {
    result = secondNum;
  } else {
    result = firstNum;
  }
  while (result > 0) {
    if ((secondNum % result === 0) && (firstNum % result === 0)) {
      return result;
    }
    result -= 1;
  }
  return result;
};

// task progression
const progressionGeneration = (firstNum, step, amountOfElements) => {
  const progression = [];
  let firstNumProgression = firstNum;
  for (let i = 1; i < amountOfElements + 1; i += 1) {
    progression.push(firstNumProgression);
    firstNumProgression += step;
  }
  return progression;
};

// all task
export const cycle = (minNum, maxNum, minNumIndex, maxNumIndex, task) => {
  let countRightAnswer = 0;

  let firstNum;
  let secondNum;
  let signColl;
  let signCollIndex;
  let signStr;

  let result;
  let resultIndex;
  let answer;
  let answerIndex;
  let answerRigth;
  let step;
  let progression;
  let question;
  let amountOfElements;

  const minNumElement = 5;
  const maxNumElement = 15;

  while (countRightAnswer < 3) {
    switch (task) {
      // even
      case 1:
        // фоормирование запроса
        firstNum = getRandom(minNum, maxNum);

        // задание и ответ пользователя
        console.log(`Question: ${firstNum}`);
        answer = askStr('Your answer: ');

        // правильный ответ
        if (firstNum % 2 === 0) {
          answerRigth = true;
        } else {
          answerRigth = false;
        }

        // проверка ответа
        // если ответ корректный и правильный
        if (answer === 'yes' && answerRigth) {
          result = 'yes';
          resultIndex = true;
          answerIndex = true;
        } else if (answer === 'no' && !answerRigth) {
          result = 'no';
          resultIndex = true;
          answerIndex = true;
        // если ответ не корректный или не правильный
        } else {
          if (answerRigth) {
            result = 'yes';
          } else {
            result = 'no';
          }
          resultIndex = true;
          answerIndex = false;
        }
        break;

        // calc
      case 2:
        // формирование запроса
        firstNum = getRandom(minNum, maxNum);
        secondNum = getRandom(minNum, maxNum);
        signColl = ['+', '-', '*'];
        signCollIndex = getRandom(minNumIndex, maxNumIndex);
        signStr = signColl[signCollIndex];

        // задание и ответ игроока
        console.log(`Question: ${firstNum} ${signStr} ${secondNum}`);
        answer = Number(askStr('Your answer: '));

        // правильный ответ
        if (signCollIndex === 0) {
          result = firstNum + secondNum;
        } else if (signCollIndex === 1) {
          result = firstNum - secondNum;
        } else {
          result = firstNum * secondNum;
        }

        // проверка ответа
        resultIndex = result;
        answerIndex = answer;
        break;

        // gcd
      case 3:
        // формирование запроса
        firstNum = getRandom(minNum, maxNum);
        secondNum = getRandom(minNum, maxNum);

        // задание и ответ игрока
        console.log(`Question: ${firstNum} ${secondNum}`);
        answer = Number(askStr('Your answer: '));

        // вычисление правильного ответа
        result = divider(firstNum, secondNum);

        // проверка ответа
        resultIndex = result;
        answerIndex = answer;
        break;

        // progression
      case 4:
        // формирование запроса
        firstNum = getRandom(minNum, maxNum);
        step = getRandom(minNumIndex, maxNumIndex);
        amountOfElements = getRandom(minNumElement, maxNumElement);

        progression = progressionGeneration(firstNum, step, amountOfElements);

        // вычисление правильного ответа
        question = getRandom(0, amountOfElements - 1);
        result = progression[question];
        progression[question] = '..';

        // задание и ответ игрока
        console.log(`Question: ${progression.join(' ')}`);
        answer = askStr('Your answer: ');

        // проверка ответа
        resultIndex = result;
        answerIndex = Number(answer);
        break;

        // prime
      case 5:
        // фоормирование запроса
        firstNum = getRandom(minNum, maxNum);

        // задание и ответ игрока
        console.log(`Question: ${firstNum}`);
        answer = askStr('Your answer: ');
        answerRigth = checkPrime(firstNum);

        // вычисление правильного ответа
        // проверка ответа
        // если ответ корректный и правильный
        if (answer === 'yes' && answerRigth) {
          result = 'yes';
          resultIndex = true;
          answerIndex = true;
        } else if (answer === 'no' && !answerRigth) {
          result = 'no';
          resultIndex = true;
          answerIndex = true;
        // если ответ не корректный или не правильный
        } else {
          if (answerRigth) {
            result = 'yes';
          } else {
            result = 'no';
          }
          resultIndex = true;
          answerIndex = false;
        }
        break;
      //
      default:
        console.log('Swith default');
    }

    // Проверка правильности оответа и решение о следующем цикле
    if (answerIndex === resultIndex) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      return { countRightAnswer, answer, result };
    }
  }
  return { countRightAnswer, answer, result };
};
