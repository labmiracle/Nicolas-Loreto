import { findMaxRepeat } from '../ejercicio-1.6';

describe('find num max repeated', () => {
    test('only 0 or 1', () => {
        expect(findMaxRepeat([1, 3, 4, 2])).toBe(-1);
        expect(findMaxRepeat([1, '2', 1, 1])).toBe(-1);
        expect(findMaxRepeat([1, 3, 4, 'hello'])).toBe(-1);
        expect(findMaxRepeat([1, 1, 0, 'hello'])).toBe(-1);
        expect(findMaxRepeat(['a', 'b', 'c', 'd'])).toBe(-1);
        expect(findMaxRepeat([1, 1.5, 1, 1.5])).toBe(-1);
        expect(findMaxRepeat([1, '0.5', 1, 1.5])).toBe(-1);
        expect(findMaxRepeat([1, 1.5, 1, '1.5'])).toBe(-1);
    });
    test('1 is repeated', () => {
        expect(findMaxRepeat([1, '1', 1, 0, 0])).toBe(3);
        expect(findMaxRepeat([0, '0', 0, 1, 1, 1])).toBe(3);
        expect(findMaxRepeat([1, '1', 0, 0, 0])).toBe(2);
        expect(findMaxRepeat([0, '0', 0, '0', 1, 1])).toBe(2);
        expect(findMaxRepeat([0, '1', 0, 0, 1, 1, 1])).toBe(3);
        expect(findMaxRepeat([1, '0', 1, 0, 1, 0, 1])).toBe(1);
        expect(findMaxRepeat([0, 0, 0, 0, 0, 0, 0])).toBe(0);
        expect(findMaxRepeat([1, 1, 1, 1, 1])).toBe(5);
        expect(findMaxRepeat([0, 1, '0', 1, 0, 1, '0', 1, 0])).toBe(1);
        expect(findMaxRepeat([1, 0, 1, 0, 1, 0])).toBe(1);
        expect(findMaxRepeat([1, 0, 0, 1])).toBe(1);
        expect(findMaxRepeat([1, '1', '0', '1'])).toBe(2);
    });
});