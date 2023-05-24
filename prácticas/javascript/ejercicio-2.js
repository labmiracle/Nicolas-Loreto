function sum (arr, n) {

  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return 'n no puede ser un número negativo';
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  };

};

console.assert(sum([1, 3, 1, 7, 10], 3) === 5);
console.assert(sum([3, 7, 0, 7, 10], 2) === 10);
console.assert(sum([6, 2, 4, 7, 10], 5) === 29);
console.assert(sum([9, 2, 90, 7, 10], 4) === 108);

