function arrayPreviousLess(items: number[]): number[] {
  // Declare output variable array
  // Iterate through array
    // For position i, if the previous item is smaller than the current
      // Push the smaller item into output
    // If no such number can be found or undefined
      // Push -1 to output instead
  // return output array

  let output: number[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i-1] < items[i]) {
      output.push(items[i-1])
    } else {
      output.push(-1);
    }
  }

  return output;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

