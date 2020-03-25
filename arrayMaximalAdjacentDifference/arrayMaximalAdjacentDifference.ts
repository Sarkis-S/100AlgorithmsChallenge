function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  // Declare max variable, initate to 0
  // Loop through array
  // We want to subtract the current integer with it's previous 
  // To account for negative integers we'll use Math.abs();
    // if any of these are higher than max
      // set max equal to that value
  // then return the max;

  let max = Math.abs(inputArray[1] - inputArray[0]);
 
  for (let i = 0; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i-1]) > max) {
      max = Math.abs(inputArray[i] - inputArray[i-1]);
    }
  }

  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0])); // 3
console.log(arrayMaximalAdjacentDifference([-1, -2, 0, 1, 1])); // 2