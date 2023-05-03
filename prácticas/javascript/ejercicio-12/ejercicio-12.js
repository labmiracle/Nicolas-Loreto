function adivinarNum(n){
    if (typeof n != 'number') {
        return '¡Sólo podemos jugar con números!';
    }
    let random = Math.random();
    let aleatorio = random * 10;  
    let entero = Math.ceil(aleatorio);   
        switch(true){
            case entero < n:
                return 'El número es menor';
            case entero > n:
                return 'El número es mayor';  
            case entero === n:
                return '¡Acertaste! FIN DEL JUEGO';       
        }
   }

console.log(adivinarNum(7));

//con dificultad

function adivinarNum(){

    alert(`Empecemos a jugar.\nRecordá que sólo tendrás 3 intentos\n¡SUERTE!`);

    let intentos = 0;
    let random = Math.random() * 10;
    let entero = Math.ceil(random);
    let input;

    while((entero !== input) && (intentos < 3)){

        input = parseInt(prompt('ingresá un número: '));
        
        if (isNaN(input)) {
            alert ('¡Sólo podemos jugar con números!')
        }

        else if(entero > input){
            alert ('El número es mayor')
                intentos++
        }
    
        else if(entero < input){
            alert ('El número es menor')
                intentos++
        }

        else{
            alert (`¡Acertaste! El número era ${entero}\nFIN DEL JUEGO`);  
            adivinarNum();
        }

    }

    if(intentos === 3){
            alert (`Lo siento, te quedaste sin intentos\nEl número era ${entero}`);
            adivinarNum();
        }

    }

adivinarNum()