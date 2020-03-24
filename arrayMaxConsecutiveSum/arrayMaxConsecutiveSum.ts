function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  // Very tricky! Interesting...
  // declare highest variable initiate to 0
  
  // iterate through inputArray
  // we dont want to mutate the inputArray
  // declare tempArray = inputArray
  // declare temp = [];
  // declare high variable initiate to 0

      // use for loop to push sets of numbers into temp
      // use reduce to get value from temp
    
    // get the value from temp by using reduce
    // then compare highest with high and take larger number
  // rinse and repeat 

  // return highest

  let highest = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
    let tempArray = inputArray.slice(i);
    let temp = [];
    let high = 0;
    
    for (let j = 0; j < k; j++) {
      temp.push(tempArray.shift());
    }

    high = temp.reduce((a, b) => {
      return a + b;
    });

    highest = (highest < high) ? high : highest;
  }

  return highest;
}

// Another approach
function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }

  for (let i = k; i < inputArray.length; i++) {
    sum -= inputArray[i - k];
    sum += inputArray[i];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8