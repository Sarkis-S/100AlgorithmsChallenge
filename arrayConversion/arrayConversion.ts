function arrayConversion(inputArray: number[]): number {
  // We need an iteration flag
  
  // Then we'll continue to loop until we get a single value
  // This will likely be a while loop

    /***
     In order to continuosly use the inputArray recursively I ended up creating a helper function. Return the new array set to inputArray. The iteration must be passed into the helper function 
     ***/

    // This is the helper function:
    // if the iteration is odd
      // loop through inputArray, i + 2
        // add current and next values together, push into output array
        // add 1 to iteration
    // else if iteration is odd
      // loop through inputArray, i + 2
        // multiply current and next values together, push into output
        // add 1 to iteration
  // Exit the while loop

  // Since output is an array
  // Return output at index 0;

  let iteration = 1;
  
  while (inputArray.length !== 1) {
    inputArray = evenOdd(inputArray, iteration);
    iteration++;
  }

  return inputArray[0];
}

// Helper function
function evenOdd (nums: number[], iteration: boolean): number[] {
  const newArray: number[] = [];

  if (iteration % 2 === 1) {
    for (let i = 0; i < nums.length; i += 2) {
      newArray.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      newArray.push(nums[i] * nums[i + 1]);  
    }
  }
  return newArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // 186
