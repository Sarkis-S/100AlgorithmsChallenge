function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  // The input is an array of integers
  // followed by elemToReplace which is a number
  // then substitutionElem is a number to replace elemToReplace

  // iterate through the array
    // if the element is equal to elemToReplace
      // then replace the current element immediately with substituionElem
      // inputArray is mutated!

  // Once the loop is complete
  // Return the inputArray

  for (let i = 0; i < inputArray.length; i++) {
    // let current = inputArray[i];

    // if(current === elemToReplace) {
    //   inputArray[i] = substitutionElem;
    // }

    (inputArray[i] === elemToReplace) ? (inputArray[i] = substitutionElem) : inputArray[i];
  }
  
  return inputArray;
}

// Another method
function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  inputArray.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });

  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3)); // [3, 2, 3]
console.log(arrayReplace([1, 2, 1], 1, 4)); // [4, 2, 4]
console.log(arrayReplace([1, 2, 1], 2, 3)); // [1, 3, 1]