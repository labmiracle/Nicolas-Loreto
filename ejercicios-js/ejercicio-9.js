function addOnlyNums(...argumentos){

    let total = 0;

    for( num of argumentos){

        typeof num != 'number' ? '' : total += num;

    }
   
    return total;
};

console.log(addOnlyNums(1,5,'cadena1','cadena2'))

