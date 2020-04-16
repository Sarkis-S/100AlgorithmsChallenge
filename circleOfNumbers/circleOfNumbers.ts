function circleOfNumbers(n: number, firstNumber: number): number {
  // My what a confusing description! Thankfully the images says it all

  // Let's if there is a correlation with number parallels

  // 0 1 2 3 4
  // 5 6 7 8 9

  // Looks like 5 is across from 0 if we use this pattern
  // Maybe create two arrays and compare the indexes?
  // This would work if evenly distributed, which the description does say the input is a positive even integer

  // We'll need to take in n, then generated two separate arrays using loops and push method

  // Then we'll have to run firstNumber through the loop again
    // Where it stops we take the index of that number
      // Then explicitly return the index value of the second array

  let array1 = [];
  let array2 = [];

  const nLength = n; // We cannot mutate n
  const newN = nLength / 2;

  for (let i = 0; i < newN; i++) {
    array1.push(i);
  }

  for (let j = newN; j < n; j++) {
    array2.push(j);
  }

  for (let k = 0; k < n; k++) {
    if (k === firstNumber) {
      return array2[k];
    }
  }
}

console.log(circleOfNumbers(10, 2)); // 7