"use strict";
var a;
var b;
function main(a, b) {
    var tmp;
    var r;
    if (a < b) {
        tmp = a;
        a = b;
        b = tmp;
    }
    r = a % b;
    while (r != 0) {
        a = b;
        b = r;
        r = a % b;
    }
    console.log(b);
}
main(48, 72);
//# sourceMappingURL=EuclideanAlgorithm.js.map