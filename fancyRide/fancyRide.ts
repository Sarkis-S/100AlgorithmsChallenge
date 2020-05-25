// Approach

// iterate through array
  // multiply l times the current fair
    // if it doens't exceed $20 AND is higher than previous rides
      // store the fare price
      // store the index of that fare

// compare that index with object containing the service matching to that index

// Return that nane of that service

function fancyRide(l: number, fares: number[]): string {
  const compare = {
    0: 'UberX',
    1: 'UberXL',
    2: 'UberPlus',
    3: 'UberBlack',
    4: 'UberSUV',
  }

  let deal = l * (fares[0]);
  let theIndex = 0;

  for (let i = 1; i < fares.length; i++) {
    let current = l * fares[i];

    if (current < 21 && current > deal) {
      deal = current;
      theIndex = i;
    }
  }

  for (let key in compare) {
    if (key === theIndex.toString()) {
      return compare[key];
    }
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3])); // 'UberXL'