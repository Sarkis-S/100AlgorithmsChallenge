function avoidObstacles(inputArray: number[]): number {
  // Tough problem...
  // What if we sort? Then,

  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...
  // o, o, o, x, o, x, x, x, o, x,  o ...

  // We want to avoid obstacles which are the inputArray numbers
  // There is a space on 4 and 8
  // A safe jump is a jump by 4

  inputArray = inputArray.sort((a, b) => { return a - b });
  const largestValue = inputArray[inputArray.length - 1];
  
  // Bad convention possibly?
  for (let i = 1; i <= largestValue + 1; i++) {
    if (inputArray.every((element) => element % i !== 0)) {
      return i;
    }
  }
}

// Another method
function avoidObstacles(inputArray: number[]): number {
  let jump = 1;
 
  while (true) {
    let flag = true;

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % jump === 0) {
        flag = false;
      }
    }

    if (flag === true) {
      return jump
    }
    
    jump++
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9])); // 4
console.log(avoidObstacles([2, 3])); // 4
// 0, 1, 2, 3, 4, 5 ...
// O, O, x, x, O, O 
console.log(avoidObstacles([1, 4, 10, 6, 2])); // 7
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ...
// o, x, x, o, x, o, x, o, o, o,  x,  o
