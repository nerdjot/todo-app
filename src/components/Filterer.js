export function GetFilter(pstrFilterName) {
  let lFilter;
  switch (pstrFilterName) {
    case 'My day':
      lFilter = MyDayFilter;
      break;
    case 'Tasks':
      lFilter = NoFilter;
      break;
    case 'Important':
      lFilter = ImportantFilter;
      break;
    default:
      lFilter = NoFilter;
      break;
  }
  return lFilter;
}

const ImportantFilter = (pTodo) => {
  return pTodo.isFavourite;
};

const MyDayFilter = (pTodo) => {
  let todayDate = new Date();
  todayDate.setHours(0);
  todayDate.setMinutes(0);
  todayDate.setSeconds(0);
  todayDate.setMilliseconds(0);
  if (pTodo.creationTime >= todayDate) {
    return true;
  }
  return false;
};

const NoFilter = (pTodo) => {
  return true;
};
