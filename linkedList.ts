class StationList {
  name: string;
  next: number;

  constructor() {
    this.name = '';
    this.next = -1;
  }
}

class LinkedList {
  list: any;
  top: any;

  constructor() {
    this.list = new Array(10);
    this.top = null;
  }

  initStationList() {
    for (let i: number = 0; i < this.list.length; i++) {
      this.list[i] = new StationList;
    }
    this.list[0].name = "新大阪"; this.list[0].next = -1;
    this.list[1].name = "名古屋"; this.list[1].next = 3;
    this.list[2].name = "東京"; this.list[2].next = 4;
    this.list[3].name = "京都"; this.list[3].next = 0;
    this.list[4].name = "新横浜"; this.list[4].next = 1;

    this.top = 2;
  }

  printStationList() {
    let idx: number = this.top;

    while (idx !== -1) {
      console.log(`${this.list[idx].name} → `);
      idx = this.list[idx].next;
    }
  }

  // 要素の挿入
  insertStationList(insIdx: number, insName: string, prevIdx: number) {
    this.list[insIdx].name = insName;
    this.list[insIdx].next = this.list[prevIdx].next
    this.list[prevIdx].next = insIdx;
  }
}

let list = new LinkedList();
list.initStationList();
list.printStationList();
list.insertStationList(5, "品川", 2);
list.printStationList();