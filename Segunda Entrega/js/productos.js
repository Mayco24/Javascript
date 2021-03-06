class Producto{
    constructor (id, nombre, tipo, color, lanzamiento, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
        this.lanzamiento = lanzamiento;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Carrito{
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const productos = [
    {
        img: '/Imagenes/Celulares/Samsung A02.png',
        id: 1,
        nombre: 'Samsung Galaxy A02s',
        tipo: 'celular',
        color: 'azul',
        lanzamiento: '2020',
        precio: 62999,
        cantidad: 2,
    },
    {
        img: '/Imagenes/Celulares/Xiaomi Redmi Note 10 5G Dual SIM 128.png',
        id: 2,
        nombre: 'Xiaomi Redmi Note 10',
        tipo: 'celular',
        color: 'plata',
        lanzamiento: '2021',
        precio: 54999,
        cantidad: 5,
    },
    {
        img: '/Imagenes/Celulares/Samsung A32.png',
        id: 3,
        nombre: 'Samsung Galaxy Awesome A32',
        tipo: 'celular',
        color: 'white',
        lanzamiento: '2021',
        precio: 49999,
        cantidad: 3,
    },
    {
        img: '/Imagenes/Celulares/LG K51S 64 GB.png',
        id: 4,
        nombre: 'LG K51S',
        tipo: 'celular',
        color: 'titanio ',
        lanzamiento: '2020',
        precio: 26999,
        cantidad: 1,
    },
    {
        img: '/Imagenes/Celulares/Moto G30 128 GB gris tornasol 4 GB RAM.png',
        id: 5,
        nombre: 'Moto G30',
        tipo: 'celular',
        color: 'gris',
        lanzamiento: '2021',
        precio: 45999,
        cantidad: 2,
    },
    {
        img: '/Imagenes/Celulares/Xiaomi Mi 11 128GB.png',
        id: 6,
        nombre: 'Xiaomi Mi 11',
        tipo: 'celular',
        color: 'blue',
        lanzamiento: '2021',
        precio: 119999,
        cantidad: 6,
    },
    {
        img: '/Imagenes/Celulares/SamsungS9.png',
        id: 7,
        nombre: 'Samsung S9 Plus',
        tipo: 'celular',
        color: 'purple',
        lanzamiento: '2017',
        precio: 41999,
        cantidad: 4,
    },
    {
        img: '/Imagenes/Celulares/SamsungA51.png',
        id: 8,
        nombre: 'Samsung A51',
        tipo: 'celular',
        color: 'white',
        lanzamiento: '2019',
        precio: 57999,
        cantidad: 9,
    },
    {
        img: '/Imagenes/Celulares/SamsungA21s.png',
        id: 9,
        nombre: 'Samsung Galaxy A21s',
        tipo: 'celular',
        color: 'azul',
        lanzamiento: '2020',
        precio: 74999,
        cantidad: 8,
    },
    {
        img: '/Imagenes/tablet/Apple iPad de 10.2.png',
        id: 10,
        nombre: 'Apple iPad',
        tipo: 'tablet',
        color: 'plata',
        lanzamiento: '2020',
        precio: 67499,
        cantidad: 5,
    },
    {
        img: '/Imagenes/tablet/Tablet Lenovo Smart Tab M8.png',
        id: 11,
        nombre: 'Tablet Lenovo Smart Tab M8',
        tipo: 'tablet',
        color: 'iron grey',
        lanzamiento: '2019',
        precio: 27999,
        cantidad: 4,
    },
    {
        img: '/Imagenes/tablet/tablet-samsung-galaxy-tab-a7_opt.png',
        id: 12,
        nombre: 'Samsung Galaxy Tab A7',
        tipo: 'tablet',
        color: 'dark gray',
        lanzamiento: '2021',
        precio: 34999,
        cantidad: 1,
    },
    {
        img: '/Imagenes/tablet/Tablet Amazon Fire HD 8 2020 KFONWI 8 32GB black con 2GB de memoria RAM.png',
        id: 13,
        nombre: 'Tablet Amazon Fire HD',
        tipo: 'tablet',
        color: 'black',
        lanzamiento: '2020',
        precio: 15499,
        cantidad: 2,
    },
    {
        img: '/Imagenes/tablet/Tablet con funda Gadnic Taurus Phone.png',
        id: 14,
        nombre: 'Tablet Gadnic',
        tipo: 'tablet',
        color: 'white',
        lanzamiento: '2018',
        precio: 22999,
        cantidad: 3,
    },
    {
        img: '/Imagenes/tablet/Samsung TAB A8.png',
        id: 15,
        nombre: 'Samsung Galaxy Tab A8',
        tipo: 'tablet',
        color: 'black',
        lanzamiento: '2019',
        precio: 31999,
        cantidad: 12,
    },
    {
        img: '/Imagenes/Relojes/Galaxy Watch3 Bluetooth (45mm) Titanium.png',
        id: 16,
        nombre: 'Samsung Galaxy Watch3',
        tipo: 'reloj',
        color: 'black',
        lanzamiento: '2020',
        precio:  79999,
        cantidad: 10,
    },
    {
        img: '/Imagenes/Relojes/Samsung Galaxy Fit2 (Bluetooth) 1.1 caja 46.6mm de pl??stico malla black de tpu y bisel black SM-R220.png',
        id: 17,
        nombre: 'Samsung Galaxy Fit2',
        tipo: 'reloj',
        color: 'black',
        lanzamiento: '2020',
        precio: 5999,
        cantidad: 14,
    },
    {
        img: '/Imagenes/Relojes/Smartwatch Amazfit Gts 2 Mini Gts2 Microfono Gps Spo2 1.55.png',
        id: 18,
        nombre: 'Smartwatch Amazfit Gts 2',
        tipo: 'reloj',
        color: 'black',
        lanzamiento: '2020',
        precio: 12499,
        cantidad: 16,
    },
    {
        img: '/Imagenes/Relojes/Xiaomi Mi Watch Lite 1.4 caja black malla black de tpu REDMIWT02.png',
        id: 19,
        nombre: 'Xiaomi Mi Watch Lite 1.4',
        tipo: 'reloj',
        color: 'black',
        lanzamiento: '2020',
        precio: 7138,
        cantidad: 9,
    },
    {
        img: '/Imagenes/Relojes/watch samsung 4.png',
        id: 20,
        nombre: 'Samsung Galaxy Watch4 Classic',
        tipo: 'reloj',
        color: 'black',
        lanzamiento: '2021',
        precio: 56999,
        cantidad: 13,
    },
    {
        img: '/Imagenes/Relojes/Samsung Galaxy Watch4 1.png',
        id: 21,
        nombre: 'Samsung Galaxy Watch4',
        tipo: 'reloj',
        color: 'black',
        lanzamiento: '2021',
        precio: 43999,
        cantidad: 6,
    },
];