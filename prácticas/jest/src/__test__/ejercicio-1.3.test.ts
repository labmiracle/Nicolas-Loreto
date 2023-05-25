import { adn } from "../ejercicio-1.3";

describe('cadena de ADN', () => {
    test('caracteres canónicos', () => {
        expect(adn('CGGC')).toBe('CGGC');
        expect(adn('GTAC')).toBe('GTAC');
        expect(adn('AAGT')).toBe('AAGT');
        expect(adn('TTGC')).toBe('TTGC');
        expect(adn('CAGT')).toBe('CAGT');
        expect(adn('TGAC')).toBe('TGAC');
        expect(adn('CGATCGAT')).toBe('CGATCGAT');
        expect(adn('CGATACGT')).toBe('CGATACGT');
        expect(adn('CGATGGTA')).toBe('CGATGGTA');
        expect(adn('CGATTGAC')).toBe('CGATTGAC');
        expect(adn('CCCCCGAT')).toBe('CCCCCGAT');
        expect(adn('AATCCGAT')).toBe('AATCCGAT');
        expect(adn('CGATCGGG')).toBe('CGATCGGG');
        expect(adn('GGCCCGAT')).toBe('GGCCCGAT');
        expect(adn('TTAACGAT')).toBe('TTAACGAT');
        expect(adn('CGATAAAA')).toBe('CGATAAAA');
        expect(adn('CCCCCGATCCCC')).toBe('CCCCCGATCCCC');
        expect(adn('AAATCGATCGAT')).toBe('AAATCGATCGAT');
        expect(adn('CGATGGTACGAT')).toBe('CGATGGTACGAT');
        expect(adn('CGATTGACGGGG')).toBe('CGATTGACGGGG');
        expect(adn('CGATCGATCGAT')).toBe('CGATCGATCGAT');
    });

    test('caracteres no canónicos', () => {
        expect(adn('CCctAgGGTA')).toBe('CCAGGTA');
        expect(adn('ACGTXYZ1234')).toBe('ACGT');
        expect(adn('AaCgT$%XYZ')).toBe('ACT');
        expect(adn('ACGT-XYZ')).toBe('ACGT');
        expect(adn('AGTACGTTG?')).toBe('AGTACGTTG');
        expect(adn('ACGTA#ACGT')).toBe('ACGTAACGT');
        expect(adn('CGTA*1234')).toBe('CGTA');
        expect(adn('CTAGGGTA!')).toBe('CTAGGGTA');
        expect(adn('GCCTAGCGATCG+')).toBe('GCCTAGCGATCG');
        expect(adn('TACGXYZACGT@')).toBe('TACGACGT');
        expect(adn('CGTAAGCTA[]')).toBe('CGTAAGCTA');
        expect(adn('aasaAGgtuasYZ')).toBe('AG');
        expect(adn('ACGTXYZ1234')).toBe('ACGT');
        expect(adn('AaCgT$%XYZ')).toBe('ACT');
        expect(adn('ACGT-XYZ')).toBe('ACGT');
        expect(adn('AGTaCGTTG?')).toBe('AGTCGTTG');
        expect(adn('ACGTA#ACGT')).toBe('ACGTAACGT');
        expect(adn('cGTA*1234')).toBe('GTA');
        expect(adn('CTAGGGTA!')).toBe('CTAGGGTA');
        expect(adn('GCCTAGcGATCG+')).toBe('GCCTAGGATCG');
        expect(adn('TACGXYZACGT@')).toBe('TACGACGT');

    });

    test('cadena vacía', () => {
        expect(adn('')).toBe('');
    });
});