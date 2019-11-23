import * as readlineSync from 'readline-sync'

function binarySearch(array: number[]) {
  let x: number = readlineSync.questionInt();
  let left: number = 0;
  let right: number = array.length - 1
  let pos: number = -1;

  while (pos === -1 && left <= right) {
    let middle: number = Math.floor((left + right) / 2);

    if (array[middle] === x) {
      pos = middle;
      break;
    }
    else if (array[middle] > x) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  console.log(pos);
}

binarySearch([39, 41, 53, 55, 68, 72, 84, 88, 92, 97])
