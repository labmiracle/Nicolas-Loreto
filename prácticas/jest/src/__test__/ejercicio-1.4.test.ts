import { sum } from "../ejercicio-1.4";

describe('sum of numbers > 0', () => {
    test('n > 0', () => {
        expect(sum(['3', '1'])).toBe(4);
        expect(sum(['10', '20', '30'])).toBe(60);
        expect(sum(['5', '8', '12'])).toBe(25);
        expect(sum(['100', '200', '50'])).toBe(350);
        expect(sum(['2', '4', '6', '8'])).toBe(20);
        expect(sum(['0', '15', '7'])).toBe(22);
        expect(sum(['25', '50', '75', '100'])).toBe(250);
        expect(sum(['9', '3', '1'])).toBe(13);
        expect(sum(['2', '2', '2', '2', '2'])).toBe(10);
        expect(sum(['1000', '2000'])).toBe(3000);
        expect(sum(['6', '9'])).toBe(15);
        expect(sum(['20', '40', '60'])).toBe(120);
        expect(sum(['7', '10', '14'])).toBe(31);
        expect(sum(['500', '1000', '250'])).toBe(1750);
        expect(sum(['3', '6', '9', '12'])).toBe(30);
        expect(sum(['1', '5', '2'])).toBe(8);
        expect(sum(['30', '60', '90', '120'])).toBe(300);
        expect(sum(['7', '5', '9'])).toBe(21);
        expect(sum(['3', '3', '3', '3', '3'])).toBe(15);
        expect(sum(['500', '1000', '2000'])).toBe(3500);
    });
    test('n < 0', () => {
        expect(sum(['3', '-1'])).toBe(3);
        expect(sum(['10', '20', '-30'])).toBe(30);
        expect(sum(['4', '7', '-12'])).toBe(11);
        expect(sum(['100', '-200', '50'])).toBe(150);
        expect(sum(['2', '4', '-6', '8'])).toBe(14);
        expect(sum(['0', '-15', '7'])).toBe(7);
        expect(sum(['-25', '50', '75', '100'])).toBe(225);
        expect(sum(['-9', '3', '1'])).toBe(4);
        expect(sum(['2', '2', '2', '-2', '2'])).toBe(8);
        expect(sum(['-1000', '2000'])).toBe(2000);
        expect(sum(['56', '-1'])).toBe(56);
        expect(sum(['10', '10', '-30'])).toBe(20);
        expect(sum(['5', '8', '-12'])).toBe(13);
        expect(sum(['100', '-200', '110'])).toBe(210);
        expect(sum(['2', '4', '-6', '8'])).toBe(14);
        expect(sum(['0', '-15', '23'])).toBe(23);
        expect(sum(['-25', '50', '75', '4300'])).toBe(4425);
        expect(sum(['-12', '3', '11'])).toBe(14);
        expect(sum(['2', '4', '3', '-2', '2'])).toBe(11);
        expect(sum(['-1000', '5233'])).toBe(5233);
    });

    test('n is string or number', () => {
        expect(sum(['as', 'cop', '2', '12', 'true'])).toBe(14);
        expect(sum(['xyz', 'abc', '10', '5', 'true'])).toBe(15);
        expect(sum(['foo', 'bar', '8', '4', 'false'])).toBe(12);
        expect(sum(['hello', 'world', '3', '7', 'true'])).toBe(10);
        expect(sum(['open', 'AI', '6', '9', 'false'])).toBe(15);
        expect(sum(['test', 'case', '1', '2', '3', '4'])).toBe(10);
        expect(sum(['alpha', 'beta', '5', '10', '15'])).toBe(30);
        expect(sum(['apple', 'orange', '20', '30', '40'])).toBe(90);
        expect(sum(['dog', 'cat', '12', '8', '4'])).toBe(24);
        expect(sum(['red', 'blue', '7', '9', '11'])).toBe(27);
        expect(sum(['green', 'yellow', '2', '4', '6'])).toBe(12);
        expect(sum(['lion', 'tiger', '1', '2', '3', '4', '5'])).toBe(15);
        expect(sum(['sun', 'moon', '10', '20', '30', '40'])).toBe(100);
        expect(sum(['happy', 'sad', '6', '3', '9'])).toBe(18);
        expect(sum(['big', 'small', '5', '2', '3'])).toBe(10);
        expect(sum(['hot', 'cold', '15', '5', '10'])).toBe(30);
        expect(sum(['fast', 'slow', '8', '2', '4'])).toBe(14);
        expect(sum(['up', 'down', '3', '6', '9'])).toBe(18);
        expect(sum(['left', 'right', '7', '14', '21'])).toBe(42);
        expect(sum(['high', 'low', '4', '8', '12', '16'])).toBe(40);

    });
    test('empty array', () => {
        expect(sum([])).toBe(0);
    });
});