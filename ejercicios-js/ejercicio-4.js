function palabraMasLarga(str) {

    if(typeof str != 'string'){

        return 'Solo se permiten palabras'

    };

    let arr = str.split(' ');
    
    let palabraMayor = '';

    for(palabra of arr){

        palabraMayor.length > palabra.length ?  palabraMayor:  palabraMayor = palabra

    };

    return palabraMayor;

  }
  
  console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');

// 

function primeraMayuscula(str) {

    if(typeof str != 'string'){

        return 'Solo se permiten palabras'

    };

     let arr = str.split(' ');
     let string = [];

     for( palabra of arr){

       string.push(palabra.charAt(0).toUpperCase() + palabra.slice(1))
       
     };

    return string.join(' ');
}

console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');