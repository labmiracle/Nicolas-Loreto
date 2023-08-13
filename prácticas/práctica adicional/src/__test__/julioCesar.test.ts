import { JulioCesar } from '../index';

const obj = new JulioCesar('WIKIPEDIA, LA ENCICLOPEDIA LIBRE');

describe('encode', () => {
  test('Code string', () => {
    expect(obj.encryptString()).toBe('COQOVKJOG, RG KTIOIRUVKJOG ROHXK');
  });
  test('Decode string', () => {
    expect(obj.decryptString()).toBe('WIKIPEDIA, LA ENCICLOPEDIA LIBRE');
  });
  test('Invert string', () => {
    expect(obj.invertString()).toBe('KXHOR GOJKVURIOITK GR ,GOJKVOQOC');
  });
  test('Invert original string', () => {
    expect(obj.invertOriginalString()).toBe('ERBIL AIDEPOLCICNE AL ,AIDEPIKIW');
  });
});
