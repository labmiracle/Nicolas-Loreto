
let count = 0;

function cc (card) {

    let validarInput = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

    if (validarInput.includes(card) === false) {

        return 'La entrada no es válida';

    };

    if (card >= 2 && card <= 6) {

        count += 1;

    }

    else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {

        count -= 1;

    };

    if (count <= 0) {

        return `${count} Hold`;

    } else {

        return `${count} Bet`;

    };

};

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");