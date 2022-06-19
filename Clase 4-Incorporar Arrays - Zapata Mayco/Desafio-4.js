function cargarProductos(arrayProducto, arrayPrecio, cant_productos) {
    for (let i = 0; i < cant_productos; i++) {
        let valor = prompt("Ingrese el nombre del producto :");
        arrayProducto[i] = valor;
        let precio = prompt("Ingrese el precio del producto :");
        arrayPrecio[i] = parseFloat(precio);
    }
}

function mostrarArray(arrayProducto, arrayPrecio) {
    for (let i = 0; i < arrayProducto.length; i++) {
        document.write(arrayProducto[i] + "<br>");
    }
    for (let i = 0; i < arrayPrecio.length; i++) {
        document.write(arrayPrecio[i] + "<br>");
    }
}

function precioTotal(arrayPrecio){
    let pTotal = 0;
    for (let i = 0; i < arrayPrecio.length; i++) {
        pTotal = pTotal + arrayPrecio[i];
    }
    document.write(`Precio Total de todos los productos es: ${pTotal}`);
}

let cant_productos = parseInt(prompt("Ingrese la cantidad de productos a ingresar: "));
let arrayProducto = [];
let arrayPrecio = [];

cargarProductos(arrayProducto, arrayPrecio, cant_productos);
mostrarArray(arrayProducto, arrayPrecio);
precioTotal(arrayPrecio);

let producto = prompt("Ingrese el nombre del producto que desea buscar: ");

console.log(arrayProducto.includes(producto));

arrayProducto.reverse();
console.log(arrayProducto);

