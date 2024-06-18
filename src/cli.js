import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  userName = readlineSync.question('Welcome to the Brain Games!\nMay I have you name? ');
  console.log(`Hello, ${userName}!`);
};

export { userName };
export default greeting;
