import { Stack } from './Stack';

export class ConvertDecimal extends Stack {
  constructor() {
    super();
  }

  convert(num: number, base: number = 2) {
    if (num === 0) {
      this.push(0);
      return;
    }

    let integerPart = Math.floor(num); // integer part
    let decimalPart = num - integerPart; // decimal part

    // integer part to base
    while (integerPart > 0) {
      this.push(integerPart % base); // the rest is added
      integerPart = Math.floor(integerPart / base);
    }

    if (num !== Math.floor(num)) {
      this.push('.'); // add point if there decimal part

      // decimal part to base
      while (decimalPart > 0) {
        decimalPart *= base;
        this.push(Math.floor(decimalPart));

        // take the decimal part of the result for the next iteration
        decimalPart -= Math.floor(decimalPart);
      }
    }

    return this.arr.join('');
  }
}

// Binary

// import { Stack } from './Stack';
//
// export class DecimalToBinary extends Stack {
//  constructor() {
//    super();
//  }
//
//  convertToBinary(num: number) {
//    if (num === 0) {
//      this.push(0);
//      return;
//    }
//
//    let integerPart = Math.floor(num); // integer part
//    let decimalPart = num - integerPart; // decimal part

// integer part to binary
//    while (integerPart > 0) {
//      switch (integerPart % 2) {
//        case 0:
//          this.push(0);
//          break;
//        case 1:
//          this.push(1);
//          break;
//      }
//      integerPart = Math.floor(integerPart / 2);
//    }
//
//    if (num !== Math.floor(num)) {
//      this.push('.'); // add point if there decimal part
//
//      // decimal part to binary
//      while (decimalPart > 0) {
//        decimalPart *= 2;
//        // take the integer part and add the value
//        switch (Math.floor(decimalPart)) {
//          case 0:
//            this.push(0);
//            break;
//          case 1:
//            this.push(1);
//            break;
//        }
//
//        // take the decimal part of the result for the next iteration
//        decimalPart -= Math.floor(decimalPart);
//      }
//    }
//
//    return this.arr.join('');
//  }
//}
