import { findRepeat } from '../ejercicio-1.5';

describe(' find character repeated', () => {
    test('repeat', () => {
        expect(findRepeat('strre')).toBe(2);
        expect(findRepeat('asddte')).toBe(2);
        expect(findRepeat('amariLlo')).toBe(5);
        expect(findRepeat('12122trre')).toBe(3);
        expect(findRepeat('programming')).toBe(6);
        expect(findRepeat('hello')).toBe(2);
        expect(findRepeat('maravilla')).toBe(6);
        expect(findRepeat('maraviLLa')).toBe(6);
        expect(findRepeat('JJaaJAaj')).toBe(0);
        expect(findRepeat('1122HOLL')).toBe(0);
        expect(findRepeat('asSa aRr')).toBe(1);
        expect(findRepeat('aS S   SS')).toBe(7);
        expect(findRepeat('AA')).toBe(0);
        expect(findRepeat('sa    asass')).toBe(9);
    });
    test('no repeat', () => {
        expect(findRepeat('asd')).toBe(-1);
        expect(findRepeat('exaMple')).toBe(-1);
        expect(findRepeat('Unique')).toBe(-1);
        expect(findRepeat('algorithm')).toBe(-1);
        expect(findRepeat('abcd')).toBe(-1);
        expect(findRepeat('xyz')).toBe(-1);
        expect(findRepeat('world')).toBe(-1);
        expect(findRepeat('KA')).toBe(-1);
        expect(findRepeat('Buenos Aires')).toBe(-1);

    });
});