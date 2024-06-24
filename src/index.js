import readlineSync from 'readline-sync';
import greeting from './cli.js';

const launchGame = (gameRules, getCurrentQuestion) => {
  const userName = greeting();
  console.log(gameRules);

  let currentAnswer = 0;

  while (currentAnswer < 3) {
    const [correctAnswer, question] = getCurrentQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === userAnswer) {
      currentAnswer += 1;
      console.log('Correct!');
      if (currentAnswer === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default launchGame;
