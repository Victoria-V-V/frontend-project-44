/* eslint-disable no-param-reassign */
import launchGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  while (number1 && number2) {
    if (number1 > number2) {
      number1 %= number2;
    } else number2 %= number1;
  }
  number1 += number2;
  return number1;
};

const getCurrentQuestion = () => {
  const number1 = Math.floor(Math.random() * 50);
  const number2 = Math.floor(Math.random() * 50);

  const correctAnswer = getGcd(number1, number2);
  const question = `${number1} ${number2}`;
  return [correctAnswer, question];
};

const playBrainGcd = () => {
  launchGame(gameRules, getCurrentQuestion);
};

export default playBrainGcd;
