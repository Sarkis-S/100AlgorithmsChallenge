function bishopAndPawn(bishop: string, pawn: string): boolean {
  // Ah yes, a very familiar problem

  // We want to create a board first, which is just an object
  // Then we want to get coordinates for the bishop and pawn
    // Grab the X coordinate for bishop
    // Grab the Y coordinate for bishop (will have to parse)

    // Grab the X coordinate for pawn
    // Grab the Y coordinate for pawn (will have to parse)

  // if the coordinates for bishop and pawn are exact
    // Then return true
  // Other scenario is if its on the same line diagonally
    // So if the coord of bishop X + Y is equal to pawn X + Y
      // Also return true

  // Any other reason, return false

  const board = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8
  }
  // I don't believe in one line jumbled code,
  // so let's use plenty of const!
  const bishopX = board[bishop[0]];
  const bishopY = parseInt(bishop[1]);
  const pawnX = board[pawn[0]];
  const pawnY = parseInt(pawn[1]);

  if (bishopX + bishopY === pawnX + pawnY || bishopX + pawnX === bishopY + pawnY) {
    return true;
  }

  return false;
}

console.log(bishopAndPawn('a1', 'c3')); // true
console.log(bishopAndPawn('a1', 'e5')); // true
console.log(bishopAndPawn('a1', 'g6')); // false