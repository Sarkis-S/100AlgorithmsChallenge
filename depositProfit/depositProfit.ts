// So we want to find out how long it will take to reach the threshold given a deposit and a growth rate

// Each year the money in our account increases 20%

// Approach:
// Initiate year variable to 0
// Initiate total variable to 100

// Use a while loop
  // While the total amount is less than threshold
    // Perform calculation then add to total
    // Up the year count

function depositProfit(deposit: number, rate: number, threshold: number): number {
  let year = 0;
  let total = 100;

  while (total < threshold) {
    total += total * 0.20;
    year++;
  }

  return year;
}

console.log(depositProfit(100, 20, 170)) // 3