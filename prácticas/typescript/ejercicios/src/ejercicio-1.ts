function myFunction(cadena1: string, cadena2: string): number {

    let cont = 0;

    const array1: string[] = cadena1.split('');

    const array2: string[] = cadena2.split('');

    for (const item of array2) {

        if (array1.includes(item)) {
            cont += 1;
        }
    }

    return cont;
}



console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);
