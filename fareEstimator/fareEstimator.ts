// Mathematical problem to determine rate for rides

// Because the problem consist of adding, subtracting, and multiplying (but no division), it makes sense to use PEMDAS as learned from college mathematics courses

// Formula on README.md

// We are working with two arrays
// cost_per_minute: [0.2, 0.35, 0.4, 0.45]
// cost_per_mile:   [1.1, 1.8, 2.3, 3.5]

// initiate total variable = []
// We iterate through the cost_per_minute array
  // let the subtotal1 = current cost_per_minute * ride_time
  // let the subtotal2 = current cost_per_mile * ride_distance
  // Push to total subtotal1 + subtotal2

// return total

function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
  let output = [];

  for (let i = 0; i < cost_per_minute.length; i++) {
    let subtotal1 = cost_per_minute[i] * ride_time;
    let subtotal2 = cost_per_mile[i] * ride_distance;
    let total = subtotal1 + subtotal2
    output.push(Number(total.toFixed(1)));
  }

  return output;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); 
// [13.7, 23.1, 28.1, 38]
