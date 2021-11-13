export function GetComparerFunc(pstrSortBy, isDescending) {
  if (pstrSortBy === '') {
    if (isDescending) {
      return ValueComparerDescending;
    } else {
      return ValueComparerAscending;
    }
  }
}

const ValueComparerAscending = (pTodoA, pTodoB) => {
  if (pTodoA['value'] < pTodoB['value']) {
    return -1;
  } else if (pTodoA['value'] > pTodoB['value']) {
    return 1;
  } else {
    return 0;
  }
};

const ValueComparerDescending = (pTodoA, pTodoB) => {
  return -1 * ValueComparerAscending(pTodoA, pTodoB);
};
