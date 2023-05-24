export function fizzBuzz(num: number): string {

    switch (true) {

        case typeof num === 'undefined':
            return 'Debe ingresar un valor';

        case num === 0:
            return 'El valor ingresado no puede ser igual a cero';

        case typeof num === 'string':
            return 'La función no permite cadenas de texto';

        case typeof num != 'number':
            return 'El valor ingresado debe ser un número';

        case num % 3 === 0 && num % 5 === 0:
            return 'FizzBuzz';

        case num % 3 === 0:
            return 'Fizz';

        case num % 5 === 0:
            return 'Buzz';

        default:
            return num.toString();
    }

}
