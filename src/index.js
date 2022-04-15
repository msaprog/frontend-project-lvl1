import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const askStr = (ask) => {
  const str = readlineSync.question(ask);
  return str;
};