// import _ from 'lodash';
import readlineSync from 'readline-sync';

// fifth sixth task

export const askStr = (ask) => {
  const str = readlineSync.question(ask);
  return str;
};

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = askStr('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};
