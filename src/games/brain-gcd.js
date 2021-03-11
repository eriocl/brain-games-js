export const gameRule = 'Find the greatest common divisor of given numbers.';

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

export const generateGameData = (roundsCount) => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const numberA = Math.floor(Math.random() * 30) + 1;
    const numberB = Math.floor(Math.random() * 30) + 1;
    const question = `${numberA} ${numberB}`;
    const correctAnswer = String(findGcd(numberA, numberB));
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};
