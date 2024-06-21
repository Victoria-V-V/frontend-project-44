import launchGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

const getCurrentQuestion = () => {
  const number = Math.floor(Math.random() * 100);

  const correctAnswer = isEven(number);
  const question = `${number}`;
  return [correctAnswer, question];
};

const playBrainEven = () => {
  launchGame(gameRules, getCurrentQuestion);
};

export default playBrainEven;
