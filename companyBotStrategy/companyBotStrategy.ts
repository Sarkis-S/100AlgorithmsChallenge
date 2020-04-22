function companyBotStrategy(trainingData: number[][]): number {
  // Array values [ x, y ]
    // x is answerTime
    // y is correctness (1 if correct, -1 if incorrect, 0 no answer)
  
  // Bot's correct answer time = average of answer times who answered correctly

  // Nested array means a nested loop, use a loop
  // declare sum variable (numerator)
    // declare count variable (denominator)

    // Use another loop
      // if y is a 1 then up the count
        // Also add x to the sum

  // Return sum / count (use parseFloat)

  let sum: number = 0;
  let count: number = 0;
  
  for (let i = 0; i < trainingData.length; i++) {
    for (let j = 0; j < trainingData[i].length; j++) {
      if (trainingData[i][j + 1] === 1) {
        count++;
        sum += trainingData[i][j];
      }
    }
  }
  
  let output = (sum/count).toFixed(1);

  if (count === 0 ) {
    return count.toFixed(1);
  }

  return output; // Note: output is a string
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]])); // 4.5
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]])); // 5.0
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]])); // 0.0
