import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getCurrentQuestion = () => {
  const number = getRandomInt(0, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [correctAnswer, question];
};

const playBrainPrime = () => {
  launchGame(gameRules, getCurrentQuestion);
};

export default playBrainPrime;
