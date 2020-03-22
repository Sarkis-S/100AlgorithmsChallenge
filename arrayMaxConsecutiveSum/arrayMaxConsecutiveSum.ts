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

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8