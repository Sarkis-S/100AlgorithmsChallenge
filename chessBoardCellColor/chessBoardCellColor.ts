function chessBoardCellColor(cell1: string, cell2: string): boolean {
  // I think nested arrays may not be necessary this time thankfully
  // We want to find out if both cells are of the same color
  // I'm thinking if somehow the cells match up mathematically, it would be true

  // Create the chess board; I'll use an object

  // Create two variables to compare
  // Variable1 would be value of A which is 1 + value of C which is 3
  // Variable2 then would be value of C which is 3 + value of A which is 1

  // If they add up
    // return true
  // Return false by default
  
  // This should work. I'll code it out.

  let board = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4,
    'E': 5, 'F': 6, 'G': 7, 'H': 8
  }
  
  let compare1 = board[cell1[0]] + parseInt(cell2[1]);
  let compare2 = board[cell2[0]] + parseInt(cell1[1]);
  // Use modulo to find remainder, works either direction
  if (compare1 % 2 === compare2 % 2) {
    return true;
  }

  return false;
}

console.log(chessBoardCellColor('A1', 'C3')); // true
console.log(chessBoardCellColor('A1', 'H3')); // false
console.log(chessBoardCellColor('E3', 'B6')); // true
