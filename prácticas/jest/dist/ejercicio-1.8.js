export const setPrice = (item, price) => {
    const newObject = new Object({
        name: item.name,
        price: price
    });
    return newObject;
};
export const addToCart = (cart, item) => {
    const newArray = [];
    newArray.push(item);
    return newArray;
};
