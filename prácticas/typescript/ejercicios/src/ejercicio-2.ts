// Code Breaker. El juego comienza generando un número

function game(): string{

    const numSecret = '2561';

    let arr = '';

    let cruz = '';

    let guion = '';

    while(arr.length < 4){

        const randomNumber: number = Math.random() * 6;
        const int = Math.floor(randomNumber)
        const s = int.toString()
        arr += s
    }

    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case (arr[i]===numSecret[i]):
                cruz += 'X'
                break
            case (numSecret.includes(arr[i])):
                guion += '-';
                break;
        }
    }
    return cruz+guion;
    
}

console.log(game())