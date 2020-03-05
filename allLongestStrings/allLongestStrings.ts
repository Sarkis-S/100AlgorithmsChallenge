function allLongestStrings(inputArray: string[]): string[] {
  // declare longestLength variable
  // loop through array to find longest length
    // if string length is larger
      // update longestLength with string length
  // loop through input array again
    // if current string length equals longestLength
      // push string to output array
  // return output

  let longestLength = inputArray[0].length;
  let output = [];

  for (let i = 0; i < inputArray.length; i++) {
    let current = inputArray[i];

    if (current.length > longestLength) {
      longestLength = current.length;
    }
  }

  for (let j = 0; j < inputArray.length; j++) {
    let current = inputArray[j];

    if (current.length === longestLength) {
      output.push(current);
    }
  }

  return output;
}

// Using higher order function and ternary operator for clean up
function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  let longestWords = [];

  inputArray.forEach((word: string) => {
    longestLength = (word.length > longestLength) ? word.length : longestLength;
  });

  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}


console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));