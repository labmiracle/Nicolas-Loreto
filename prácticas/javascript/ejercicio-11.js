function onlyUniques(...arg){

    let newArray = [];

    for(elemento of arg){

        newArray.includes(elemento) ? '' : newArray.push(elemento)
        
    };

    return newArray;

}

console.log(onlyUniques(1,2,2,'name',5,1,5,7,'lastname','name'))