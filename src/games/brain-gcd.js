import { roundsCount, runEngine } from '../engine.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const findGcd = (first, second) => {
  let a = first;
  let b = second;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const generateGameData = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i++) {
    const numberA = Math.floor(Math.random() * 30) + 1;
    const numberB = Math.floor(Math.random() * 30) + 1;
    const question = `${numberA} ${numberB}`;
    const correctAnswer = String(findGcd(numberA, numberB));
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};

export default () => {
  const gameData = generateGameData();
  runEngine(gameData, gameRule);
};
