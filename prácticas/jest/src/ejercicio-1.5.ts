// Ejercicio 1.5
// Dada una cadena, encuentre el primer carácter que se repite consecutivamente en ella y 
// devuelva
// su índice. Si no hay caracteres repetidos, devuelve -1. Esta función debe ignorar 
// cualquier
// espacio y no debe distinguir entre mayúsculas y minúsculas: trate ’a’ como equivalente a 
// ’A’

export function findRepeat(string: string): number {

    const lowerCase = string.toLowerCase();

    const arr = lowerCase.split('');

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1] && arr[i] != ' ') {
            return i;
        }

    }
    return -1;
}