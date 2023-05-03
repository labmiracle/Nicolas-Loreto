function sum(...argumentos){

    let total = 0;

    for(elemento of argumentos){

        if(typeof elemento != 'number'){

            return 'Los argumentos deben ser números';

        }else{

            total += elemento;

        };
      
    }

    return total

}

console.log(sum(1,7,2))