import { roundsCount, runEngine } from '../engine.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const gameData = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = Math.floor(Math.random() * 30) - 10;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};

export default () => {
  const gameData = generateGameData();
  runEngine(gameData, gameRule);
};
