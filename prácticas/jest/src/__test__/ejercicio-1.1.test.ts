import { fizzBuzz } from '../ejercicio-1.1';

describe('ejercicio FizzBuzz', () => {

    test('divisible por 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
        expect(fizzBuzz(18)).toBe('Fizz');
        expect(fizzBuzz(21)).toBe('Fizz');
        expect(fizzBuzz(24)).toBe('Fizz');
        expect(fizzBuzz(27)).toBe('Fizz');
        expect(fizzBuzz(33)).toBe('Fizz');
    });

    test('divisible por 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
        expect(fizzBuzz(25)).toBe('Buzz');
        expect(fizzBuzz(35)).toBe('Buzz');
        expect(fizzBuzz(40)).toBe('Buzz');
        expect(fizzBuzz(50)).toBe('Buzz');
    });

    test('divisible por 3 y por 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
        expect(fizzBuzz(60)).toBe('FizzBuzz');
        expect(fizzBuzz(75)).toBe('FizzBuzz');
        expect(fizzBuzz(90)).toBe('FizzBuzz');
        expect(fizzBuzz(105)).toBe('FizzBuzz');
    });

    test('num es indivisible por 3 o 5', () => {

        expect(fizzBuzz(7)).toBe('7');
        expect(fizzBuzz(11)).toBe('11');
        expect(fizzBuzz(13)).toBe('13');
        expect(fizzBuzz(17)).toBe('17');
        expect(fizzBuzz(19)).toBe('19');
        expect(fizzBuzz(23)).toBe('23');
        expect(fizzBuzz(29)).toBe('29');

    });

    test('num = 0', () => {
        expect(fizzBuzz(0)).toBe('El valor ingresado no puede ser igual a cero');
    });
});