function boxBlur(image: number[][]): number[][] {

    // image = 
    //         [[1, 1, 1], 
    //         [1, 7, 1], 
    //         [1, 1, 1]]

    // Since we're dealing with nested arrays, unfortunately we will require nested loops...sadly multiple nested loops it seems

    // Start by initiating the output resolution

    // We'll loop through the first array, which is the array the holds the image (pixels) arrays together
    // Note: We only want to hit one array at a time (stop at the edge)

        // Create another loop to hit individual values within the pixel array


    const outputRes = [];

    for (let y = 0; y < image.length - 2; y++) {
        console.log(image[y]);

        for (let x = 0; x < image[y].length; x++) {
            console.log(image[y][x]);

        }
    }

    return outputRes;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));