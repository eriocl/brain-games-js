export const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const generateGameData = (roundsCount) => {
  const gameData = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = Math.ceil(Math.random() * 15) + 1;
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};
