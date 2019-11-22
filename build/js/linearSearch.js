"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linerSearch(array) {
    // let x: number = readlineSync.questionInt();
    var x = 55;
    var i = 0;
    array[array.length] = x;
    while (array[i] != x) {
        i++;
    }
    if (i == array.length - 1)
        return console.log("Not Found");
    console.log(i);
}
linerSearch([72, 68, 92, 88, 41, 53, 97, 84, 39, 55]);
//# sourceMappingURL=linearSearch.js.map