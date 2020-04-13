function chunkyMonkey(inputArray: any[], size: number): any[][] {
  // So we're split the inputArray into "size" numnber of arrays. Simple enough. Seems we don't need to worry about odd-numbered sizes.

  // Ended up refactoring for simpler approach
  // Create an output array

  // Loop through inputArray
    // Take a slice of inputArray in "size"-size
      // Push that into the output
  // Return output array

  let output = [];

  for (let i = 0; i < inputArray.length; i += size) {
    output.push(inputArray.slice(i, i + size));
  }

  return output;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));