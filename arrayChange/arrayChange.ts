function arrayChange(inputArray: number[]): number {
  // In this problem we need to add 1 once to index (1) then add 1 twice to index (2), thus it takes (3) increases

  // It makes sense to start with a count variable
  // Iterate through inputArray
    // If current integer is higher than next integer
      // Take the difference between the two
      // Set next integer equal to curren integer + 1
      // Add difference to count until loop finishes
  // return count

  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let current = inputArray[i];
    let next = inputArray[i + 1];

    if (current >= next) {
      let difference = (current + 1) - (next);

      inputArray[i + 1] = current + 1;
      count += difference;
    }
  }

  return count;
}

console.log(arrayChange([1, 1, 1])); // 3
console.log(arrayChange([2, 1, 1])); // 5
console.log(arrayChange([2, 4, 1])); // 4