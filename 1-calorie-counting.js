// Part 1
// Input file as string
function findMaxCalorieAmount(listOfElfInventories) {
  // Split input based on empty line
  const elves = listOfElfInventories.split("\n\n");
  let max = 0;

  for (let i = 0; i < elves.length; i++) {
    const elfInventory = elves[i].split("\n");

    // Sum together all items the elf is carrying
    const elfInventoryWeight = elfInventory.reduce((acc, curr) => acc + parseInt(curr), 0);

    if (elfInventoryWeight > max) {
      max = elfInventoryWeight;
    }
  }

  return max;
}

// Part 2
// Input file as string
function findTotalOfTopThreeCalorieAmounts(listOfElfInventories) {
  // Split input based on empty line
  const elves = listOfElfInventories.split("\n\n");
  let topThreeWeights = [];

  for (let i = 0; i < elves.length; i++) {
    const elfInventory = elves[i].split("\n");

    // Sum together all items the elf is carrying
    const elfInventoryWeight = elfInventory.reduce((acc, curr) => acc + parseInt(curr), 0);

    if (topThreeWeights.length < 3) {
      topThreeWeights.push(elfInventoryWeight);
    }
    else {
      // Sort top weights and grab lowest
      const minimumOfTopThreeWeights = topThreeWeights.sort((a, b) => a - b)[0];

      // Replace lowest if current elf weight is greater
      if (elfInventoryWeight > minimumOfTopThreeWeights) {
        topThreeWeights[0] = elfInventoryWeight;
      }
    }
  }

  const sumOfTopThreeWeights = topThreeWeights.reduce((acc, curr) => acc + curr, 0);
  return sumOfTopThreeWeights;
}