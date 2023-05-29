// Ejercicio 1.6
// Dada una matriz de 1s y 0s, encuentre el número máximo de 1s consecutivos en esta matriz. 
// Si
// hay algún valor distinto de 1 o 0 en la matriz, es un error y devuelve -1. Los 1s y 0s 
// pueden ser
// valores de cadena o enteros, ambos son aceptables y deben considerarse equivalentes.
export function findMaxRepeat(arr) {
    const toNum = [];
    arr.forEach(element => {
        toNum.push(parseFloat(String(element)));
    });
    const isCeroOrOne = toNum.every(n => n === 0 || n === 1);
    let count = 0;
    let maxRepeated = 0;
    if (isCeroOrOne) {
        for (let i = 0; i < toNum.length; i++) {
            if (toNum[i] === 1) {
                count++;
            }
            else if (toNum[i] === 0) {
                if (count > maxRepeated) {
                    maxRepeated = count;
                }
                count = 0;
            }
        }
        if (count > maxRepeated) {
            maxRepeated = count;
        }
        return maxRepeated;
    }
    return -1;
}
