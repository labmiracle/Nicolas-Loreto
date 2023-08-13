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
