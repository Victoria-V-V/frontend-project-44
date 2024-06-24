import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCurrentQuestion = () => {
  const number = getRandomInt(0, 100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [correctAnswer, question];
};

const playBrainEven = () => {
  launchGame(gameRules, getCurrentQuestion);
};

export default playBrainEven;
