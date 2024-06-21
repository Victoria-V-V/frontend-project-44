import launchGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const caclulate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'Wrong operator';
  }
};

const getCurrentQuestion = () => {
  const operatorsArray = ['+', '-', '*'];
  const operator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);

  const correctAnswer = caclulate(operator, number1, number2);
  const question = `${number1} ${operator} ${number2}`;
  return [correctAnswer, question];
};

const playBrainCalc = () => {
  launchGame(gameRules, getCurrentQuestion);
};

export default playBrainCalc;
