function adjacentElementsProduct(inputArray: number[]): number {
  // Multiply the first number against the next number
  // Continue this process to the end
    // if the product of current process is bigger than the previous
      // Set that product to output variable
  // return the output once process is complete

  let output = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let current = inputArray[i];
    let next = inputArray[i+1];
    let product = current * next;

    if (product > output) {
      output = product;
    }
  }

  return output;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));