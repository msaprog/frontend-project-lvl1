import readlineSync from 'readline-sync';

// all task
export const askStr = (ask) => {
  const str = readlineSync.question(ask);
  return str;
};

// all task
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
