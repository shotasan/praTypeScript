"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = __importStar(require("readline-sync"));
function binarySearch(array) {
    var x = readlineSync.questionInt();
    var left = 0;
    var right = array.length - 1;
    var pos = -1;
    while (pos === -1 && left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (array[middle] === x) {
            pos = middle;
            break;
        }
        else if (array[middle] > x) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    console.log(pos);
}
binarySearch([39, 41, 53, 55, 68, 72, 84, 88, 92, 97]);
//# sourceMappingURL=binarySearch.js.map