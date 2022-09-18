export const filterByArrayObjects = (arr1: any[], arr2: any[]) => {
  let res = [];
  res = arr1.filter((el) => {
    return !arr2.find((element) => {
      return element.id === el.id;
    });
  });
  return res;
};
