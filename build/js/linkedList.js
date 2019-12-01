"use strict";
var StationList = /** @class */ (function () {
    function StationList() {
        this.name = '';
        this.next = -1;
    }
    return StationList;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.list = new Array(10);
        this.top = null;
    }
    LinkedList.prototype.initStationList = function () {
        for (var i = 0; i < this.list.length; i++) {
            this.list[i] = new StationList;
        }
        this.list[0].name = "新大阪";
        this.list[0].next = -1;
        this.list[1].name = "名古屋";
        this.list[1].next = 3;
        this.list[2].name = "東京";
        this.list[2].next = 4;
        this.list[3].name = "京都";
        this.list[3].next = 0;
        this.list[4].name = "新横浜";
        this.list[4].next = 1;
        this.top = 2;
    };
    LinkedList.prototype.printStationList = function () {
        var idx = this.top;
        while (idx !== -1) {
            console.log(this.list[idx].name + " \u2192 ");
            idx = this.list[idx].next;
        }
    };
    // 要素の挿入
    LinkedList.prototype.insertStationList = function (insIdx, insName, prevIdx) {
        this.list[insIdx].name = insName;
        this.list[insIdx].next = this.list[prevIdx].next;
        this.list[prevIdx].next = insIdx;
    };
    return LinkedList;
}());
var list = new LinkedList();
list.initStationList();
list.printStationList();
list.insertStationList(5, "品川", 2);
list.printStationList();
//# sourceMappingURL=linkedList.js.map