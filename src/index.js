import readlineSync from 'readline-sync';

// fifth task
export const askStr = (ask) => {
  const str = readlineSync.question(ask);
  return str;
};

export default askStr;
