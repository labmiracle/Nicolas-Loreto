interface Item {
    name: string,
    price: number;
}

export const setPrice = (item: Item, price: number): object => {

    const newObject = new Object({
        name: item.name,
        price: price
    });
    return newObject;
};

export const addToCart = (cart: string[], item: object): string[] => {


    const newArray: string[] = [];

    newArray.push(item as keyof object);

    return newArray;

};