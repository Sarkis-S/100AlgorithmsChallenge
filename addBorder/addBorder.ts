function addBorder(picture: string[]): string[] {
  // Output is an array so we'll declare an array variable output and return it

  // Top border: take length of picture and concat * equal to its length plus 2, then push to output

  // Mid border: Concat * to beginning and end of picture element, then push to output

  // Bottom border: If picture is last element in array, create closing bottom border similar to top.

  let output = [];
  let pictureLength = picture[0].length + 2;

  // Create top frame
  let topFrame = '';

  for (let i = 0; i < pictureLength; i++) {
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
  let bottomFrame = '';;

  for (let i = 0; i < pictureLength; i++) {
    bottomFrame += '*';
  }
  output.push(bottomFrame);

  return output;
}

// Another shortened solution
function addBorder(picture: string[]): string[] {
  const pictureLength = picture[0].length + 2;
  let border = '';

  for (let i = 0; i < pictureLength; i++) {
    border += '*';
  }

  picture.unshift(border);
  picture.push(border);

  for (let i = 1; i < pictureLength - 1; i++) {
    picture[i] = '*' + picture[i] + '*';
  }

  return picture;
}

// Cleaned up solution
function addBorder(picture: string[]): string[] {
  const border = '*'.repeat(picture.length + 2);

  picture.unshift(border);
  picture.push(border);

  for (let i = 1; i < border - 1; i++) {
    picture[i] = '*' + picture[i] + '*';
  }

  return picture;
}


console.log(addBorder(["abc", "ded"]));