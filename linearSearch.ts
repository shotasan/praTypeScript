import * as readlineSync from 'readline-sync'

function linerSearch(array: number[]) {
  // let x: number = readlineSync.questionInt();
  let x: number = 55
  let i: number = 0

  array[array.length] = x;

  while (array[i] != x) {
    i++;
  }
  if (i == array.length - 1) return console.log("Not Found");

  console.log(i);
}


linerSearch([72, 68, 92, 88, 41, 53, 97, 84, 39, 55])