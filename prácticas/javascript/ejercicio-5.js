function camelize (str) {

    if (typeof str != 'string') {

        return 'No es una cadena de caracteres';

    };

    let arr = str.split(' ');

    let aMayuscula = [];

    for (palabra of arr) {

        aMayuscula.push(palabra.charAt(0).toUpperCase() + palabra.slice(1));

    };

    let string = aMayuscula.join('');

    let camelCase = string.charAt(0).toLowerCase() + string.slice(1);

    return camelCase;

}

console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');