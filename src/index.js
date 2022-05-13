import readlineSync from 'readline-sync';

export const play = (info, getGameTask) => {
  const maxCountRigthAnswer = 3;

  let rigthAnswer;
  let answer;
  let task;

  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(info);

  for (let countRigthAnswer = 0; countRigthAnswer < maxCountRigthAnswer; countRigthAnswer += 1) {
    [rigthAnswer, task] = getGameTask();
    console.log(task);

    answer = readlineSync.question('Your answer: ');

    if (rigthAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
};

export default play;
