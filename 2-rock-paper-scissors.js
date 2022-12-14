// Opponent's choice vs Your choice
// Opponent (A == Rock, B == Paper, C == Scissors)
// You (X == Rock, Y == Paper, Z == Scissors)
const outcomes = new Map([
  ["A X", 4], // You choose Rock
  ["B X", 1],
  ["C X", 7],
  ["A Y", 8], // You choose Paper
  ["B Y", 5],
  ["C Y", 2],
  ["A Z", 3], // You choose Scissors
  ["B Z", 9],
  ["C Z", 6],
]);

// Part 1
// Input file as string
function strategyGuideTotalScore(input) {
  const moves = input.split("\n");
  let sum = 0

  moves.forEach(move => {
    sum += outcomes.get(move);
  });

  return sum;
}

// Opponent (A == Rock, B == Paper, C == Scissors)
// Outcome (X == you lose, Y == draw, Z == you win)
const outcomesPartTwo = new Map([
  ["A X", 3],
  ["A Y", 4],
  ["A Z", 8],
  ["B X", 1],
  ["B Y", 5],
  ["B Z", 9],
  ["C X", 2],
  ["C Y", 6],
  ["C Z", 7],
]);

// Part 2
// Input file as string
function strategyGuideTotalScorePartTwo(input) {
  const moves = input.split("\n");
  let sum = 0

  moves.forEach(move => {
    sum += outcomesPartTwo.get(move);
  });

  return sum;
}
