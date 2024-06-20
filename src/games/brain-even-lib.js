import readlineSync from 'readline-sync';
import greeting, { userName } from '../cli.js';

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playBrainEven = () => {
  let currentQuestion = 1;

  while (currentQuestion <= 3) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      currentQuestion += 1;
      console.log('Correct!');
      if (currentQuestion === 4) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default playBrainEven;
