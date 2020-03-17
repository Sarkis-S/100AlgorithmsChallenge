function alternatingSums(a: number[]): number[] {
  // We can use a flag that keeps track of which teams goes to which
  // Keep variables for two teams
  // Iterate through the input array then do the math
  // Then concat the teams into one array for return

  let flag = true;
  let teamA = 0;
  let teamB = 0;

  for (let i = 0; i < a.length; i++) {
    if (flag === true) {
      teamA += a[i];
      flag = false;
    } else {
      teamB += a[i];
      flag = true;
    }
  }

  return [teamA, teamB];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
// [180, 105]