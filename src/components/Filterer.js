export function GetFilter(pstrFilterName) {
  if (pstrFilterName === '') {
    return NoFilter;
  }
}

const NoFilter = (pTodo) => {
  return true;
};
