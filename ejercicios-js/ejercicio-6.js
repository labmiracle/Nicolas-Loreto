const carrito = {

    productos: [
        {
            nombre: 'papel higienico',
            unidades: 4,
            precio: 5
        },
        {
            nombre: 'chocolate',
            unidades: 2,
            precio: 1.5
        }
    ],

    get precioTotal() {

        let total = 0;

        for (producto of this.productos){

            total += producto.precio

        };

        return total;
    }
    
}

console.log(carrito.precioTotal);


