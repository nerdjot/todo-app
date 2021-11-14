export function GetComparerFunc(pstrSortBy, isDescending) {
  let lComparer;
  switch (pstrSortBy) {
    case 'creation date':
      lComparer = new CreationTimeComparer();
    case 'alphabetical order':
      lComparer = new ValueComparer();
    case 'importance':
      lComparer = new ImportanceComparer();
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
    return -1 * this.Ascending(pTodoA, pTodoB);
  };
}

class ValueComparer extends Comparer {
  constructor() {
    super('value');
  }

  Ascending = (pTodoA, pTodoB) => {
    console.log(pTodoA['value'].toLowerCase());
    console.log(pTodoB['value'].toLowerCase());
    if (pTodoA['value'].toLowerCase() < pTodoB['value'].toLowerCase()) {
      console.log(-1);
      return -1;
    } else if (pTodoA['value'].toLowerCase() > pTodoB['value'].toLowerCase()) {
      console.log(1);
      return 1;
    } else {
      console.log(0);
      return 0;
    }
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
      return +1;
    } else {
      return 1;
    }
  };
}
