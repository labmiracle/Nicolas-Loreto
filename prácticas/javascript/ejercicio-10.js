function combineTwoArrays (arr1, arr2) {

    let newArray = [...arr1, ...arr2];

    return newArray;

}

console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]));