function centuryFromYear(year: number): number {
  // Given a year input, convert to centuries
  // 1st century begins from year 1 to 100
  // 2nd century begins from year 101 to 200
    // Meaning we can divide the year by 100 to find century
    // I believe we need to consider division being even or odd because they wont always come out evenly

  // Create output variable for century
    // initialize it to equal year divided by 100

  // we find out if its even then simply return the answer
    // otherwise we can use Math.floor then add one because its a little over 5 years I suppose

    const century = year / 100;

    if (year % 100 === 0) {
      return century;
    }
    
    return Math.floor(century) + 1;
}

console.log(centuryFromYear(1905)); // 20
console.log(centuryFromYear(1700)); // 17