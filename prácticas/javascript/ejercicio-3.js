function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {

let crecimiento = velocidadCrecimiento - velocidadDecrecimiento;
let alturaActual = 0;
let dias = 0

// validaciones

if(velocidadCrecimiento <= 0 || velocidadDecrecimiento <= 0){

    return 'Los valores de crecimiento y decrecimiento no pueden ser negativos o iguales a 0'

}

else if(velocidadCrecimiento < velocidadDecrecimiento){

    return 'La planta no puede decrecer más de lo que crecerá'

}

// ciclo while

else{

    while(alturaActual < alturaDeseada){

            alturaActual += crecimiento
            dias ++
        
    }

    return 'La planta tardará en crecer ' + dias + ' días'

    }
}

console.log (calcularDiasCrecimiento(10, 8, 10))

