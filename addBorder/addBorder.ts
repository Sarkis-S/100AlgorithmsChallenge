function addBorder(picture: string[]): string[] {
  // Output is an array so we'll declare an array variable output and return it

  // Top border: take length of picture and concat * equal to its length plus 2, then push to output

  // Mid border: Concat * to beginning and end of picture element, then push to output

  // Bottom border: If picture is last element in array, create closing bottom border similar to top.

  let output = [];
  let pictureLength = picture[0].length;
  
  // Find length of largest picture
  for (let i = 0; i < picture.length; i++) {
    let tempCount = 0;

    for (let j = 0; j < picture[i].length; j++) {
      tempCount++;
      (tempCount > pictureLength) ? (pictureLength = tempCount) : (pictureLength = pictureLength);
    }
  }

  // Create top frame
  let topLength = pictureLength + 2;
  let topFrame = '';

  for (let k = 0; k < topLength; k++) {
    topFrame += '*';
  }
  output.push(topFrame);

  // Create mid frame
  let midFrame = '';
  
  for (let i = 0; i < picture.length; i++) {
    midFrame += '*';
    midFrame += picture[i];
    midFrame += '*';
    output.push(midFrame);
    midFrame = '';
  }

  // Create bottom frame
  let bottomFrame = '';
  let bottomLength = pictureLength + 2;

  for (let i = 0; i < bottomLength; i++) {
    bottomFrame += '*';
  }
  output.push(bottomFrame);

  return output;
}

console.log(addBorder(["abc", "ded"]));