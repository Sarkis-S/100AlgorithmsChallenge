function extractMatrixColumn(matrix: number[][], column: number): number[] {
  let output: number[] = [];

  matrix.forEach(array => output.push(array[column]));

  return output;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2)); // [1, 0, 3]
