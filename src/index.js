import readlineSync from 'readline-sync';

export const play = (info, getGameTask, getPlayerResponse) => {
  let countRightAnswer = 0;

  let rigthAnswer;
  let answer;
  let task;

  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(info);

  while (countRightAnswer < 3) {
    [rigthAnswer, task] = getGameTask();
    console.log(task);

    const answerStr = readlineSync.question('Your answer: ');
    answer = getPlayerResponse(answerStr);

    if (rigthAnswer === answer) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      break;
    }
  }

  if (countRightAnswer === 3) {
    console.log(`Congratulations, ${nameUser}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
    console.log(`Let's try again, ${nameUser}!`);
  }
};

export default play;
