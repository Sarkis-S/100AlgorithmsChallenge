function chunkyMonkey(inputArray: any[], size: number): any[][] {
  // So we're split the inputArray into "size" numnber of arrays. Simple enough. Seems we don't need to worry about odd-numbered sizes.

  // Create an output array

    // Loop through inputArray
      // Create temp array
      // Initialize size flag to zero

      // Push current element into temp array
      // Up size flag count
      // If size flag count is equal to size
        // Push temp array to output array

  // Return output array

  let output = [];

  for (let i = 0; i < inputArray.length; i += size) {
    output.push(inputArray.slice(i, i + size));
  }

  return output;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));