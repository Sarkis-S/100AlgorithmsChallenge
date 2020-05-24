// How factorials work
// 3 Factorial is written as 3!, which is 3 * 2 * 1
// Given the number 'num' return the factorial of num

// Approach
// Most straightforward solution is a while loop multiplying num with num - 1
// and storing that value for use later with the next iteration of num - 1
// Rinse and repeat

function factorializeANumber(num: number): number {
  // let count = num;

  // let factorial = count;

  // while (count > 1) {
  //   factorial = (factorial * (count - 1));
  //   count --;
  // }

  // return factorial;



  /**
   * Recursion Solution
   */

  // Now let's use recursion because we absolutely enjoy complexity
  // and some believe it to be quite 'sexy'

  // Loop stop condition
  if (num === 0) {
    return 1;
  } else {
    // Actual calculation
    return num * factorializeANumber(num - 1);
  }

}

console.log(factorializeANumber(5)); // 120
console.log(factorializeANumber(10)); // 3628800