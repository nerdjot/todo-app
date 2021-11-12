class Sorter {
  constructor(pInputTodoList, pMetric) {
    this.mInputTodoList = pInputTodoList;
    this.mMetric = pMetric;
  }

  sortAscendingOrder() {
    return this.mInputTodoList.sort(comparerAscending);
  }

  sortDescendingOrder() {
    return this.mInputTodoList.sort(comparerDescending);
  }

  comparerAscending(objA, objB) {
    if (objA[this.mMetric] < objB[this.mMetric]) {
      return -1;
    } else if (objA[this.mMetric] > objB[this.mMetric]) {
      return 1;
    } else {
      return 0;
    }
  }
  comparerDescending(objA, objB) {
    return -1 * comparerAscending(objA, objB);
  }
}

class CreationDateSorter extends Sorter {
  constructor(pInputTodoList) {
    super(pInputTodoList, 'creationDate');
  }
}

class ValueSorter extends Sorter {
  constructor(pInputTodoList) {
    super(pInputTodoList, 'value');
  }
}

class ImportanceSorter extends Sorter {
  sortAscendingOrder() {}

  sortDescendingOrder() {}
}
