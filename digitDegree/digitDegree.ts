// Given the example given to us we're adding the digits of the n number

// 5 = 0
// 100 = 1 + 0 + 0 = 1
// 91 = 9 + 1 = 10 (one count) -> 1 + 0 = 1 (two count)

  // Approach:
    // create count variable
    // create a numStr variable
    // stringify 'n' then split it and store in numStr
    
    // use a while loop
      // while the numStr length is greater than 1 digit
      // use reduce on numStr and apply parsing, store to numStr
      // up the count

  // return the count;
    

function digitDegree(n: number): number {
  let numStr: number[] = n.toString().split('').map((element) => parseInt(element));
  let count = 0;

  while (numStr.length > 1) {
    numStr = numStr.reduce((a, b) => {
      return a + b;
    });

    numStr = numStr.toString().split('').map((element) => parseInt(element));

    count++;
  }

  return count;
}

console.log(digitDegree(5)); // 0
console.log(digitDegree(100)); // 1
console.log(digitDegree(91)); // 2