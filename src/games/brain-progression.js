export const gameRule = 'What number is missing in the progression?';

const makeProgression = (length, firstElement, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = firstElement + step * i;
  }
  return progression;
};

export const generateGameData = (roundsCount) => {
  const gameData = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const progLength = Math.floor(Math.random() * 10) + 8;
    const progFirstElement = Math.floor(Math.random() * 10) + 1;
    const progStep = Math.floor(Math.random() * 9) + 1;
    const progression = makeProgression(progLength, progFirstElement, progStep);
    const randomIndex = Math.floor(Math.random() * (progression.length));
    const correctAnswer = String(progression[randomIndex]);
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};
