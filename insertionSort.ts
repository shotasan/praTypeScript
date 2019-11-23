function insertionSort(array: number[]) {
  let ins: number;
  let cmp: number;
  let temp: number;

  for (ins = 1; ins < array.length; ins++) {
    temp = array[ins];
    for (cmp = ins - 1; cmp >= 0; cmp--) {
      if (array[cmp] < temp) {
        array[cmp + 1] = array[cmp];
      } else {
        break;
      }
    }
    array[cmp + 1] = temp;
  }
  console.log(array);
}

insertionSort([90, 34, 78, 12, 56]);
