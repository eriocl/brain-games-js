import readlineSync from 'readline-sync';

export const run = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
};

export const b = () => {

};

b();
