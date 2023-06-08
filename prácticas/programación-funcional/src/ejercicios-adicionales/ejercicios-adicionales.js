"use strict";
const simuladores = [
    {
        name: 'Mario',
        lastname: 'Santos',
        role: 'Logística y planificación',
        alter_ego: 'León Stofenmache'
    },
    {
        name: 'Emilio',
        lastname: 'Ravenna',
        role: 'Personificación',
        alter_ego: 'Máximo Cozzetti'
    },
    {
        name: 'Pablo',
        lastname: 'Lamponne',
        role: 'Provisión de recursos',
        alter_ego: 'Basilio Dos Reyes'
    },
    {
        name: 'Gabriel',
        lastname: 'Medina',
        role: 'Investigación',
        alter_ego: 'Jacques Dupont'
    }
];
// 1. Implemente su propia función map
function mapSimulador(arr) {
    const maped = arr.map(e => {
        return `${e.alter_ego} es ${e.name} ${e.lastname}`;
    });
    return maped;
}
// 2. Implemente su propia función find
function findSimulador(arr) {
    const finded = arr.find(e => {
        return e.lastname === 'Lamponne';
    });
    return finded;
}
// 3. Implemente su propia función filter
function filterSimulador(arr) {
    const filtered = arr.filter(e => {
        return e.name.includes('i');
    });
    return filtered;
}
// 4. Implemente su propia función reduce
function reduceSimulador(arr) {
    const reduced = arr.reduce((obj, e) => {
        obj[e.alter_ego] = e.name + ' ' + e.lastname;
        return obj;
    }, {});
    return reduced;
}
// 5. Queremos escribir cálculos usando funciones y obtener los resultados. Requerimientos:
// • Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)
// • Debe haber una función para cada una de las siguientes operaciones matemáticas:
// suma, resta, multiplicación y división
// • Cada cálculo consta exactamente de una operación y dos números
// • La función más externa representa el operando izquierdo, la función más interna
// representa el operando derecho
// • La división debe ser una división entera. Por ejemplo, el resultado debería ser 2 y no
// 2.666666...
// seven(times(five())); // debe devolver 35
// four(plus(nine())); // debe devolver 13
// eight(minus(three())); // debe devolver 5
// six(dividedBy(two())); // debe devolver 
