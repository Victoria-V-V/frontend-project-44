import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (firstTerm, termsCount, difference) => {
  const progression = [];
  for (let i = firstTerm; progression.length < termsCount; i += difference) {
    progression.push(i);
  }
  return progression;
};

const getCurrentQuestion = () => {
  const firstTerm = getRandomInt(1, 10);
  const termsCount = getRandomInt(5, 10);
  const difference = getRandomInt(1, 5);
  const hiddenTermIndex = getRandomInt(0, termsCount - 1);

  const progression = getProgression(firstTerm, termsCount, difference);
  const progressionWithHiddenTerm = [...progression];
  progressionWithHiddenTerm[hiddenTermIndex] = '..';

  const correctAnswer = progression[hiddenTermIndex];
  const question = `${progressionWithHiddenTerm.join(' ')}`;
  return [correctAnswer, question];
};

const playBrainProgression = () => {
  launchGame(gameRules, getCurrentQuestion);
};

export default playBrainProgression;
