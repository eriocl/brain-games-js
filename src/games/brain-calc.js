export const gameRule = 'What is the result of the expression ?';

const calculate = (a, b, operation) => {
  switch (operation) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      throw new Error("'{$operation}' invalid operand");
  }
};

export const generateGameData = (roundsCount) => {
  const operations = ['+', '-', '*'];
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const numberA = Math.floor(Math.random() * 30) + 1;
    const numberB = Math.floor(Math.random() * 30) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const question = `${numberA} ${operation} ${numberB}`;
    const correctAnswer = String(calculate(numberA, numberB, operation));
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};
