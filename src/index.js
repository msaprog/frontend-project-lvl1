import readlineSync from 'readline-sync';

// export const play = (info, getGameTask, getPlayerResponse) => {
export const play = (info, getGameTask) => {
  const maxCountRigthAnswer = 3;
  let countRigthAnswer;

  let rigthAnswer;
  let answer;
  let task;

  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(info);

  for (countRigthAnswer = 0; countRigthAnswer < maxCountRigthAnswer; countRigthAnswer += 1) {
    [rigthAnswer, task] = getGameTask();
    console.log(task);

    answer = readlineSync.question('Your answer: ');

    if (rigthAnswer === answer) {
      console.log('Correct!');
    } else {
      break;
    }
  }

  if (countRigthAnswer === maxCountRigthAnswer) {
    console.log(`Congratulations, ${nameUser}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
    console.log(`Let's try again, ${nameUser}!`);
  }
};

export default play;
