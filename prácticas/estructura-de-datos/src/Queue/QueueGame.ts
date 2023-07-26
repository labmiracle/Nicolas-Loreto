import { Queue } from './Queue';

export class QueueGame extends Queue {
  constructor(protected arr: string[]) {
    super();
  }
  game() {
    while (this.size() != 1) {
      // if the size of the queue is one there is a winner
      let num = Math.floor(Math.random() * this.size()); // pass the potato randomly
      this.arr.splice(num, 1); // delete of the queue
    }

    console.log('the winner is', this.arr);
    return this.arr;
  }
}

let game = new QueueGame([
  'Sofía',
  'Mateo',
  'Valentina',
  'Thiago',
  'Mía',
  'Benjamín',
  'Isabella',
  'Agustín',
  'Martina',
  'Santiago',
]);

game.game();
