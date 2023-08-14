import { Tamagotchi, TamagotchisCollection, Gender } from '../index';

describe('Tamagatchi Class', () => {
  test('eat', () => {
    const cocoTamagotchi = new Tamagotchi('COCO', 10, Gender.Male, 5, 9);
    cocoTamagotchi.eat();
    expect(cocoTamagotchi.energy).toEqual(12.5);
  });
  test('hop', () => {
    const momoTamagotchi = new Tamagotchi('MOMO', 100, Gender.Male, 2, 50);
    momoTamagotchi.hop();
    expect(momoTamagotchi.energy).toEqual(75);
  });
  test('walk', () => {
    const titaTamagotchi = new Tamagotchi('TITA', 15, Gender.Female, 5, 90);
    titaTamagotchi.walk();
    expect(titaTamagotchi.energy).toEqual(13.5);
  });
  test('is live', () => {
    const pepeTamagotchi = new Tamagotchi('PEPE', 50, Gender.Male, 1, 23);
    pepeTamagotchi.walk();
    pepeTamagotchi.hop();
    pepeTamagotchi.hop();
    pepeTamagotchi.hop();
    expect(pepeTamagotchi.isLive).toEqual(true);
  });
  test('is dead', () => {
    const cocoTamagotchi = new Tamagotchi('COCO', 10, Gender.Male, 5, 9);
    cocoTamagotchi.walk();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    cocoTamagotchi.hop();
    expect(cocoTamagotchi.isLive).toEqual(false);
    const momoTamagotchi = new Tamagotchi('MOMO', 55, Gender.Male, 2, 50);
    momoTamagotchi.eat();
    momoTamagotchi.eat();
    momoTamagotchi.drink();
    momoTamagotchi.eat();
    momoTamagotchi.drink();
    expect(momoTamagotchi.isLive).toEqual(true);
    momoTamagotchi.eat();
    momoTamagotchi.eat();
    momoTamagotchi.drink();
    expect(momoTamagotchi.isLive).toEqual(false);
  });
});

describe('TamagotchisCollection class', () => {
  test('adding and deleting tamagotchi', () => {
    const newTamagotchiCollection = new TamagotchisCollection();

    const cocoTamagotchi = new Tamagotchi('COCO', 10, Gender.Male, 5, 9);
    const momoTamagotchi = new Tamagotchi('MOMO', 55, Gender.Male, 2, 50);
    const titaTamagotchi = new Tamagotchi('TITA', 10, Gender.Female, 5, 90);
    const pepeTamagotchi = new Tamagotchi('PEPE', 10, Gender.Male, 1, 23);

    newTamagotchiCollection.add(titaTamagotchi);
    expect(newTamagotchiCollection.get()).toContain(titaTamagotchi);

    newTamagotchiCollection.add(cocoTamagotchi);
    expect(newTamagotchiCollection.get()).toContain(cocoTamagotchi);

    newTamagotchiCollection.add(momoTamagotchi);
    expect(newTamagotchiCollection.get()).toContain(momoTamagotchi);

    newTamagotchiCollection.add(pepeTamagotchi);
    expect(newTamagotchiCollection.get()).toContain(pepeTamagotchi);

    // delete

    newTamagotchiCollection.delete(titaTamagotchi);
    expect(newTamagotchiCollection.get()).not.toContain(titaTamagotchi);
    newTamagotchiCollection.delete(titaTamagotchi);
    expect(newTamagotchiCollection.delete(titaTamagotchi)).toBe(
      'Deleted: TITA'
    );

    newTamagotchiCollection.delete(cocoTamagotchi);
    expect(newTamagotchiCollection.get()).not.toContain(cocoTamagotchi);

    newTamagotchiCollection.delete(momoTamagotchi);
    expect(newTamagotchiCollection.get()).not.toContain(momoTamagotchi);

    newTamagotchiCollection.delete(pepeTamagotchi);
    expect(newTamagotchiCollection.get()).not.toContain(pepeTamagotchi);
  });

  test('searching tamagotchi', () => {
    const newTamagotchiCollection = new TamagotchisCollection();

    const cocoTamagotchi = new Tamagotchi('COCO', 10, Gender.Male, 5, 9);
    const momoTamagotchi = new Tamagotchi('MOMO', 55, Gender.Male, 2, 50);
    const titaTamagotchi = new Tamagotchi('TITA', 10, Gender.Female, 5, 90);
    const pepeTamagotchi = new Tamagotchi('PEPE', 10, Gender.Male, 1, 23);

    newTamagotchiCollection.add(cocoTamagotchi);
    newTamagotchiCollection.add(momoTamagotchi);
    newTamagotchiCollection.add(titaTamagotchi);

    expect(newTamagotchiCollection.search(titaTamagotchi)).toBe(titaTamagotchi);
    expect(newTamagotchiCollection.search(momoTamagotchi)).toBe(momoTamagotchi);

    newTamagotchiCollection.delete(pepeTamagotchi);
    newTamagotchiCollection.delete(cocoTamagotchi);
    expect(newTamagotchiCollection.search(pepeTamagotchi)).toBe('Not found');
    expect(newTamagotchiCollection.search(cocoTamagotchi)).toBe('Not found');
  });
});
