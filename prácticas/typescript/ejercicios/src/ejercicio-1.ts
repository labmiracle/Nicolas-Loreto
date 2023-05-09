// Ejercicio 1
// 1. Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
// los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
// tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas.

function myFunction(cadena1: string, cadena2: string): number{

    let cont = 0;

    const array1: string[] = cadena1.split('');

    const array2: string[] = cadena2.split('');

    for ( const item of array2 ){

        if(array1.includes(item)){
            cont+=1;
        }
    }

    return cont;
}



console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);
