export function GetComparerFunc(pstrSortBy, isDescending) {
  let lComparer;
  switch (pstrSortBy) {
    case 'value':
      lComparer = new ValueComparer();
    default:
      lComparer = new CreationTimeComparer();
  }

  if (isDescending) {
    return lComparer.Descending;
  } else {
    return lComparer.Ascending;
  }
}

class Comparer {
  constructor(pCriteria) {
    this.mCriteria = pCriteria;
  }
  Ascending = (pTodoA, pTodoB) => {
    let valA = pTodoA[this.mCriteria];
    let valB = pTodoB[this.mCriteria];
    if (valA < valB) {
      return -1;
    } else if (valA > valB) {
      return 1;
    } else {
      return 0;
    }
  };

  Descending = (pTodoA, pTodoB) => {
    return -1 * Ascending(pTodoA, pTodoB);
  };
}

class ValueComparer extends Comparer {
  constructor() {
    super('value');
  }

  Ascending = (pTodoA, pTodoB) => {
    if (pTodoA['value'].toLowerCase() < pTodoB['value'].toLowerCase()) {
      return -1;
    } else if (pTodoA['value'].toLowerCase() > pTodoB['value'].toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  };

  Descending = (pTodoA, pTodoB) => {
    return -1 * Ascending(pTodoA, pTodoB);
  };
}

class CreationTimeComparer extends Comparer {
  constructor() {
    super('creationTime');
  }
}

class ImportanceComparer extends Comparer {
  constructor() {
    super('isFavourite');
  }
  Ascending = (pTodoA, pTodoB) => {
    let valA = pTodoA[this.mCriteria];
    let valB = pTodoB[this.mCriteria];
    if (valA === true && valB === false) {
      return -1;
    } else if (valA === false && valB === true) {
      return 1;
    } else {
      return 0;
    }
  };

  Descending = (pTodoA, pTodoB) => {
    return -1 * Ascending(pTodoA, pTodoB);
  };
}
