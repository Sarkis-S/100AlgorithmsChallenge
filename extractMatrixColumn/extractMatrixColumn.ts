function extractMatrixColumn(matrix: number[][], column: number): number[] {
  let output = [];

  matrix.forEach(array => {
    for (let i = 0; i < array.length; i++) {
      if (i === column) {
        output.push(array[i]);
      }
    }
  });

  return output;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2)); // [1, 0, 3]
