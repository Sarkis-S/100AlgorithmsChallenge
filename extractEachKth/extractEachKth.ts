function extractEachKth(inputArray:number[], k: number): number[] {
  // This is straightforward
  let output = [];

  inputArray.forEach(elem => {
    if (elem !== k) {
      output.push(elem);
    }
  });

  return output;
  
  // filter method solution
  // return inputArray.filter(elem => elem !== k);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// [1, 2, 4, 5, 6, 7, 8, 9, 10]