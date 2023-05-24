import { isLeapYear } from "../ejercicio-1.2";

describe('leap year', () => {
    test('is leap year', () => {
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear(2004)).toBe(true);
        expect(isLeapYear(2008)).toBe(true);
        expect(isLeapYear(2012)).toBe(true);
        expect(isLeapYear(2016)).toBe(true);
        expect(isLeapYear(2020)).toBe(true);
        expect(isLeapYear(2024)).toBe(true);
        expect(isLeapYear(2028)).toBe(true);
        expect(isLeapYear(2032)).toBe(true);
        expect(isLeapYear(2036)).toBe(true);
        expect(isLeapYear(2040)).toBe(true);
        expect(isLeapYear(2044)).toBe(true);
        expect(isLeapYear(2048)).toBe(true);
        expect(isLeapYear(2052)).toBe(true);
        expect(isLeapYear(2056)).toBe(true);
        expect(isLeapYear(2060)).toBe(true);
        expect(isLeapYear(2064)).toBe(true);
        expect(isLeapYear(2068)).toBe(true);
        expect(isLeapYear(2072)).toBe(true);
        expect(isLeapYear(2076)).toBe(true);
        expect(isLeapYear(2080)).toBe(true);
        expect(isLeapYear(2084)).toBe(true);
        expect(isLeapYear(2088)).toBe(true);
        expect(isLeapYear(2096)).toBe(true);
        expect(isLeapYear(2104)).toBe(true);

    });

    test(' is not leap ', () => {
        expect(isLeapYear(2001)).toBe(false);
        expect(isLeapYear(2001)).toBe(false);
        expect(isLeapYear(2002)).toBe(false);
        expect(isLeapYear(2003)).toBe(false);
        expect(isLeapYear(2005)).toBe(false);
        expect(isLeapYear(2006)).toBe(false);
        expect(isLeapYear(2007)).toBe(false);
        expect(isLeapYear(2009)).toBe(false);
        expect(isLeapYear(2010)).toBe(false);
        expect(isLeapYear(2011)).toBe(false);
        expect(isLeapYear(2013)).toBe(false);
        expect(isLeapYear(2014)).toBe(false);
        expect(isLeapYear(2015)).toBe(false);
        expect(isLeapYear(2017)).toBe(false);
        expect(isLeapYear(2018)).toBe(false);
        expect(isLeapYear(2019)).toBe(false);
        expect(isLeapYear(2021)).toBe(false);
        expect(isLeapYear(2022)).toBe(false);
        expect(isLeapYear(2023)).toBe(false);
        expect(isLeapYear(2025)).toBe(false);
        expect(isLeapYear(2026)).toBe(false);
        expect(isLeapYear(2027)).toBe(false);
        expect(isLeapYear(2029)).toBe(false);
        expect(isLeapYear(2030)).toBe(false);
        expect(isLeapYear(2031)).toBe(false);
        expect(isLeapYear(2033)).toBe(false);
    });

    test(' year < 0 ', () => {
        expect(isLeapYear(0)).toBe(false);
        expect(isLeapYear(-10)).toBe(false);
    });
});