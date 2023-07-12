const arr1 = [1, 1, 1, 1, 1, 2, 3, 4, 5, 5];

const arr2 = [1, 1, 10, 2, 10, 7, 4, 8, 5, 10, 10, 10, 24];

const elementNoRepeat = (arr1, arr2) => {
  const set1 = new Set(arr1);

  const set2 = new Set(arr2);

  const arrConcat = [...set1, ...set2];

  const newSet = new Set(arrConcat);

  return [...newSet];
};

elementNoRepeat(arr1, arr2);

// In the next code I dont use Set, exercise only for practice and documentation:

/* const arr1 = [1, 1, 1, 1, 1, 2, 3, 4, 5, 5];

const arr2 = [1, 1, 10, 2, 10, 7, 4, 8, 5, 10, 10, 10, 24];

const elementNoRepeat = (arr1, arr2) => {
  const concatArr = [...arr1, ...arr2];

  const newArray = [];
  for (let i = 0; i < concatArr.length; i++) {
    concatArr.sort();
    if (concatArr[i] != concatArr[i + 1]) {
      newArray.push(concatArr[i]);
    }
  }
  return newArray;
};

elementNoRepeat(arr1, arr2);*/
