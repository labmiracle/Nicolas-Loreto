let jugador1 = 0;
let jugador2 = 0;

function jugar(mazo: number[]): string {

    while (jugador1 === jugador2) {
        const numRandom = Math.random() * mazo.length;
        jugador1 = Math.ceil(numRandom);

        if (mazo.includes(jugador1)) {
            mazo.splice(jugador1 - 1, 1);
        }

        const numRandom2 = Math.random() * mazo.length;
        jugador2 = Math.ceil(numRandom2);

        if (mazo.includes(jugador2)) {
            mazo.splice(jugador2 - 1, 1);
        }
    }

    if (jugador1 > jugador2) {
        return `Ganó el JUGADOR UNO con la carta ${jugador1}.\nEl JUGADOR DOS sacó la carta ${jugador2}.`;
    }
    return `Ganó el JUGADOR DOS con la carta ${jugador2}.\nEl JUGADOR UNO sacó la carta ${jugador1}.`;
}

console.log(jugar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
