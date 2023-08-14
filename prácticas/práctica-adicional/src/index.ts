// Julio Cesar algorithm
export class JulioCesar {
  constructor(public string: string) {}

  encryptString() {
    if (typeof this.string != 'string') {
      return 'incorrect type value';
    }

    const arr = this.string.split('');

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case 'A':
          arr[i] = 'G';
          break;
        case 'B':
          arr[i] = 'H';
          break;
        case 'C':
          arr[i] = 'I';
          break;
        case 'D':
          arr[i] = 'J';
          break;
        case 'E':
          arr[i] = 'K';
          break;
        case 'F':
          arr[i] = 'L';
          break;
        case 'G':
          arr[i] = 'M';
          break;
        case 'H':
          arr[i] = 'N';
          break;
        case 'I':
          arr[i] = 'O';
          break;
        case 'J':
          arr[i] = 'P';
          break;
        case 'K':
          arr[i] = 'Q';
          break;
        case 'L':
          arr[i] = 'R';
          break;
        case 'M':
          arr[i] = 'S';
          break;
        case 'N':
          arr[i] = 'T';
          break;
        case 'O':
          arr[i] = 'U';
          break;
        case 'P':
          arr[i] = 'V';
          break;
        case 'Q':
          arr[i] = 'W';
          break;
        case 'R':
          arr[i] = 'X';
          break;
        case 'S':
          arr[i] = 'Y';
          break;
        case 'T':
          arr[i] = 'Z';
          break;
        case 'U':
          arr[i] = 'A';
          break;
        case 'V':
          arr[i] = 'B';
          break;
        case 'W':
          arr[i] = 'C';
          break;
        case 'X':
          arr[i] = 'D';
          break;
        case 'Y':
          arr[i] = 'E';
          break;
        case 'Z':
          arr[i] = 'F';
          break;
        default:
          break;
      }
    }

    return arr.join('');
  }

  decryptString() {
    const encrypt = this.encryptString();

    const arr = encrypt.split('');

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case 'A':
          arr[i] = 'U';
          break;
        case 'B':
          arr[i] = 'V';
          break;
        case 'C':
          arr[i] = 'W';
          break;
        case 'D':
          arr[i] = 'X';
          break;
        case 'E':
          arr[i] = 'Y';
          break;
        case 'F':
          arr[i] = 'Z';
          break;
        case 'G':
          arr[i] = 'A';
          break;
        case 'H':
          arr[i] = 'B';
          break;
        case 'I':
          arr[i] = 'C';
          break;
        case 'J':
          arr[i] = 'D';
          break;
        case 'K':
          arr[i] = 'E';
          break;
        case 'L':
          arr[i] = 'F';
          break;
        case 'M':
          arr[i] = 'G';
          break;
        case 'N':
          arr[i] = 'H';
          break;
        case 'O':
          arr[i] = 'I';
          break;
        case 'P':
          arr[i] = 'J';
          break;
        case 'Q':
          arr[i] = 'K';
          break;
        case 'R':
          arr[i] = 'L';
          break;
        case 'S':
          arr[i] = 'M';
          break;
        case 'T':
          arr[i] = 'N';
          break;
        case 'U':
          arr[i] = 'O';
          break;
        case 'V':
          arr[i] = 'P';
          break;
        case 'W':
          arr[i] = 'Q';
          break;
        case 'X':
          arr[i] = 'R';
          break;
        case 'Y':
          arr[i] = 'S';
          break;
        case 'Z':
          arr[i] = 'T';
          break;
        default:
          break;
      }
    }
    return arr.join('');
  }

  invertString() {
    const encrypt = this.encryptString();
    const invert = encrypt.split('').reverse().join('');
    return invert;
  }

  invertOriginalString() {
    if (typeof this.string != 'string') {
      return 'incorrect type value';
    }
    const stringOriginal = this.string;
    return stringOriginal.split('').reverse().join('');
  }
}

const obj = new JulioCesar('WIKIPEDIA, LA ENCICLOPEDIA LIBRE');

obj.encryptString();
obj.decryptString();
obj.invertString();
obj.invertOriginalString();

// Tamagotchi

export interface ITamagotchi {
  name: string;
  energy: number;
  gender: string;
  senseOfHumor: number;
  age: number;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export class Tamagotchi implements ITamagotchi {
  constructor(
    public name: string,
    public energy: number,
    public gender: Gender,
    public senseOfHumor: number,
    public age: number,
    public isLive: boolean = true
  ) {
    if (energy < 1 || energy > 100) {
      throw Error('The energy value cannot be minor than 1 or major than 100');
    }
    if (senseOfHumor < 1 || senseOfHumor > 5) {
      throw Error(
        'The sense of humor value cannot be minor than 1 or major than 5'
      );
    }
  }

  countEatOrDrink: number = 0;

  eat() {
    if (this.countEatOrDrink <= 5) {
      this.energy = this.energy + (25 * this.energy) / 100;
      this.countEatOrDrink++;
    } else {
      this.isLive = false;
      return 'Tamagotchi is dead :(';
    }
  }

  sleep() {
    this.countEatOrDrink = 0;
  }

  drink() {
    if (this.countEatOrDrink < 5) {
      this.countEatOrDrink++;
    } else {
      this.isLive = false;
      return 'Tamagotchi is dead :(';
    }
  }

  hop() {
    if (this.energy >= 1) {
      this.energy = this.energy - (25 * this.energy) / 100;
      // count only if the tamagotchi eats or drinks consecutively
      this.countEatOrDrink = 0;
    } else {
      this.isLive = false;
      return 'Tamagotchi is dead :(';
    }
  }

  run() {
    this.countEatOrDrink = 0;
  }

  walk() {
    this.countEatOrDrink = 0;
    if (this.energy >= 1) {
      this.energy = this.energy - (10 * this.energy) / 100;
    } else {
      this.isLive = false;
    }
    return 'Tamagotchi is dead :(';
  }

  getName() {
    return this.name;
  }

  getEnergy() {
    return this.energy;
  }

  getGender() {
    return this.gender;
  }

  getSenseOfHumor() {
    return this.senseOfHumor;
  }

  getAge() {
    return this.age;
  }

  getIsLive() {
    return this.isLive;
  }

  get() {
    return this;
  }
}

export class TamagotchisCollection {
  collection: ITamagotchi[] = [];

  constructor() {}

  add(tamagotchi: ITamagotchi) {
    this.collection.push(tamagotchi);
    return `Added> ${tamagotchi.name}`;
  }

  delete(tamagotchi: ITamagotchi) {
    // search index
    const index = this.collection.findIndex((t) => (t.name = tamagotchi.name));

    // if index is -1, use splice to delete tamagotchi
    if (index != -1) {
      this.collection.splice(index, 1);

      return `Deleted: ${tamagotchi.name}`;
    } else {
      return 'Not found';
    }
  }

  search(tamagotchi: ITamagotchi) {
    const index = this.collection.findIndex((t) => t.name === tamagotchi.name);

    if (index != -1) {
      console.log('Found: ', this.collection[index]);
      return this.collection[index];
    } else {
      console.log('Not Found: ', tamagotchi.name);
      return 'Not found';
    }
  }

  get() {
    return this.collection;
  }
}
