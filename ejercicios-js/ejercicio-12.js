function adivinarNum(n){

    if(typeof n != 'number'){
        return '¡Sólo podemos jugar con números!'
    }

    let random = Math.random()

    let aleatorio = random * 10
    
    let entero = Math.ceil(aleatorio)
    
    console.log(entero)
  
        switch(true){
            case entero < n:
                return 'El número es menor';
            case entero > n:
                return 'El número es mayor'  
            case entero === n:
                return '¡Acertaste! FIN DEL JUEGO';       
        }
}

console.log(adivinarNum(5))

