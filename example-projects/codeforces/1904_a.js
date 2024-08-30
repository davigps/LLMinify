'use strict'
const isExists = (arr, values) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == values[0] && arr[i][1] == values[1]) return true;
  }
  return false;
};
let t = readline(),
  propabilityX = [-1, -1, 1, 1],
  propabilityY = [-1, 1, -1, 1];
while (t--) {
  let aB = readline()
    .split(" ")
    .map((x) => parseInt(x));
  let a = aB[0],
    b = aB[1],
    constrainsking = readline()
    .split(" ")
    .map((x) => parseInt(x)),
    constrainsQueen = readline()
    .split(" ")
    .map((x) => parseInt(x)),
    king = new Array(),
    queen = new Array(),
    cnt = 0;
  for (let i = 0; i < 4; i++) {
    if (
      !isExists(king, [
        constrainsking[0] + propabilityX[i] * a,
        constrainsking[1] + propabilityY[i] * b,
      ])
    ) {
      king.push([
        constrainsking[0] + propabilityX[i] * a,
        constrainsking[1] + propabilityY[i] * b,
      ]);
    }
    if (
      !isExists(king, [
        constrainsking[0] + propabilityY[i] * b,
        constrainsking[1] + propabilityX[i] * a,
      ])
    ) {
      king.push([
        constrainsking[0] + propabilityY[i] * b,
        constrainsking[1] + propabilityX[i] * a,
      ]);
    }
    if (
      !isExists(queen, [
        constrainsQueen[0] + propabilityX[i] * a,
        constrainsQueen[1] + propabilityY[i] * b,
      ])
    ) {
      queen.push([
        constrainsQueen[0] + propabilityX[i] * a,
        constrainsQueen[1] + propabilityY[i] * b,
      ]);
    }
    if (
      !isExists(queen, [
        constrainsQueen[0] + propabilityY[i] * b,
        constrainsQueen[1] + propabilityX[i] * a,
      ])
    ) {
      queen.push([
        constrainsQueen[0] + propabilityY[i] * b,
        constrainsQueen[1] + propabilityX[i] * a,
      ]);
    }
  }
  for (let i = 0; i < king.length; i++) {
    for (let j = 0; j < queen.length; j++) {
      if (king[i][0] == queen[j][0] && king[i][1] == queen[j][1]) cnt++;
    }
  }

  print(cnt);
}