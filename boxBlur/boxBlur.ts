function boxBlur(image: number[][]): number[][] {

    // image = 
    //         [[1, 1, 1], 
    //         [1, 7, 1], 
    //         [1, 1, 1]]

    // Since we're dealing with nested arrays, unfortunately we will require nested loops... sadly multiple nested loops it seems

    // Start by initiating the output resolution

    // We'll loop through the first array, which is the array the holds the image (pixels) arrays together (y values)
    // Note: We only want to hit one array at a time (stop at the edge)

        // Create another loop to hit individual values within the pixel array (x values)

            // From here we need to deal with the averages which requires more loops!
            // We need to hit all y values, then the x values

            // Create loops to target y-axis values
                // Create another loop to target x values within the y-axis

    // return  output resolution


    const outputRes = [];

    for (let y = 0; y < image.length - 2; y++) {
        const line = [];

        for (let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0;
            
            for (let a = y; a < y + 3; a++) {
                for (let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;

                }
            }

            line.push(Math.floor(sum/count));
        }

        outputRes.push(line);
    }

    return outputRes;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));