import readlineSync from 'readline-sync';

export const roundsCount = 3;
export const runEngine = (gameData, gameRule) => {
  console.log('Welcome to the Brain Game!');
  console.log(`${gameRule}`);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  gameData.forEach((data) => {
    const [question, correctAnswer] = data;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  });
  console.log(`Congratulations, ${name}!`);
};
