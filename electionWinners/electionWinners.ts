// Takes in array of number of votes
// Also k, integer equal to number of voters who didn't vote yet

// We are to find the number of candidates who still have a chance to win the election

// As I understand it, if we go through the array and add 3 votes to each we can get the highest number for each candidate. This assumes that all three goes to each candidate. In this case 2 of them can still win.

// Approach
  // I think using Math.max() will be useful here, which returns the largest of the zero or more numbers given as input parameters.
  // Example: console.log(Math.max(1, 3, 2)); // 3

  // Iterate through the array
    // initialize a variable which equals current integer + k
      // if the variable is > Math.max(votes)
        // up the count
  // return the count

function electionsWinners(votes: number[], k: number): number {
  let count: number = 0;

  votes.forEach(vote => {
    if (vote + k > Math.max(...votes)) {
      count++;
    }
  });

  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3)); // 2