import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
};

export { userName };
export default greeting;
