function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  // Bizzare problem but amusing!
  // We want to compare each others arms and check that the numbers add up equally
  // This is pure logic

  let myArm = [yourLeft, yourRight];
  let friendsArm = [friendsLeft, friendsRight]
  let isEquallyStrong = false;
  // Check that your arms value are also found in friend and vice versa
  if (myArm[0] === friendsArm[0] || myArm[0] === friendsArm[1]) {
    if (myArm[1] === friendsArm[0] || myArm[0] === friendsArm[1]) {
      isEquallyStrong = true;
    }
  }
  // Checks that you and your friends stength values are equal
  if (myArm[0] + myArm[1] === friendsArm[0] + friendsArm[1]) {
    isEquallyStrong = true;
  }

  return isEquallyStrong;
}

// A slightly better version with ternary operators
function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const myWeakest = (yourLeft <= yourRight) ? yourLeft : yourRight;
  const myStrongest = (yourLeft >= yourRight) ? yourLeft : yourRight;
  const friendsWeakest = (friendsLeft <= friendsRight) ? friendsLeft : friendsRight;
  const friendsStrongest = (friendsLeft >= friendsRight) ? friendsLeft : friendsRight;

  return (myStrongest === friendsStrongest && myWeakest === friendsWeakest);
}

console.log(areEquallyStrong(10, 15, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 9)); // false