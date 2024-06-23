import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result;
  if (number < 2) result = 'no';
  if (number > 1 && number <= 3) result = 'yes';
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    } else result = 'yes';
  }

  return result;
};

const getCurrentQuestion = () => {
  const number = getRandomInt(0, 100);

  const correctAnswer = isPrime(number);
  const question = `${number}`;
  return [correctAnswer, question];
};

const playBrainPrime = () => {
  launchGame(gameRules, getCurrentQuestion);
};

export default playBrainPrime;
