// We're given this matrix:

// [[1, 1, 1, 1], 
//  [2, 2, 2, 2], 
//  [3, 3, 3, 3]]

// 'a'th row vs 'b'th column (zero-based):
// So we're taking row 1 ([2, 2, 2, 2])
// then adding column 1 from column 3
// with 3 from column 3
// We skipped 2 because it's already added from row 1

// It will look like this:
// (2 + 2 + 2 + 2) + (1 + 3) = 12

// Approach:

// declare output variable

  // Iterate through the first array
    // if the index is the 'a'th index of the inner array
      // use reduce() and store that value to output variable
    
  // Iterate through first array again
    // if the inner array is not the 'a'th row
      // add the value to output from 'b' index

// return output

function crossingSum(matrix: number[][], a: number, b: number): number {
  let output = 0;

  matrix.forEach((element, index) => {
    if (index === a) {
      output = element.reduce((a, b) => {
        return a + b;
      });
    }
  });

  matrix.forEach((element, index) => {
    if (index !== a) {
      output += element[b];
    }
  });

  return output;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3)); // 12
