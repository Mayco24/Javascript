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

    estaDisponible(){
        if (this.cantidad == 0){
            disponible = false;
            alert("¡¡No tenemos stock en estos momentos!!")
        }
        else{
            disponible = true;
        }
    }
}

class Envio{
  constructor (e_id, e_provincia, e_precio, e_tiempo){
    this.e_id = e_id;
    this.e_provincia = e_provincia;
    this.e_precio = e_precio;
    this.e_tiempo = e_tiempo;
  }
}

class Pedido{
    constructor(producto, cantidad){
      this.productos = producto;
      this.cantidad = cantidad;
    }
}

const envio1 = new Envio(1,"CORDOBA", 800,"entre 3 a 5 dias habiles");
const envio2 = new Envio(2,"SANTA FE", 800,"entre 3 a 5 dias habiles");
const envio3 = new Envio(3,"LA PAMPA", 800,"entre 3 a 5 dias habiles");
const envio4 = new Envio(4,"ENTRE RIOS", 800,"entre 3 a 5 dias habiles");
const envio5 = new Envio(5,"SAN LUIS", 800,"entre 3 a 5 dias habiles");
const envio6 = new Envio(6,"MENDOZA", 800,"entre 3 a 5 dias habiles");
const envio7 = new Envio(7,"CABA", 0,"en menos de 24 horas");
const envio8 = new Envio(8,"CATARMARCA", 1000,"entre 5 a 7 dias habiles");
const envio9 = new Envio(9,"LA RIOJA", 1000,"entre 5 a 7 dias habiles");
const envio10 = new Envio(10,"SAN JUAN", 1000,"entre 5 a 7 dias habiles");
const envio11 = new Envio(11,"SANTIAGO DEL ESTERO", 1000,"entre 5 a 7 dias habiles");
const envio12 = new Envio(12,"TUCUMAN", 1000,"entre 5 a 7 dias habiles");
const envio13 = new Envio(13,"CORRIENTES", 1000,"entre 5 a 7 dias habiles");
const envio14 = new Envio(14,"RIO NEGRO", 1000,"entre 5 a 7 dias habiles");
const envio15 = new Envio(15,"NEUQUEN", 1000,"entre 5 a 7 dias habiles");
const envio16 = new Envio(16,"SALTA", 1200,"entre 5 a 7 dias habiles");
const envio17 = new Envio(17,"JUJUY", 1200,"entre 5 a 7 dias habiles");
const envio18 = new Envio(18,"CHACO", 1200,"entre 5 a 7 dias habiles");
const envio19 = new Envio(19,"MISIONES", 1200,"entre 5 a 7 dias habiles");
const envio20 = new Envio(20,"CHUBUT", 1200,"entre 5 a 7 dias habiles");
const envio21 = new Envio(21,"SANTA CRUZ", 1200,"entre 5 a 7 dias habiles");
const envio22 = new Envio(22,"TIERRA DEL FUEGO", 1200,"entre 5 a 7 dias habiles");
const envio23 = new Envio (23,"GBA",300,"en 24 horas")


const envios =[envio1, envio2, envio3, envio4, envio5, envio6, envio7, envio8, envio9, envio10, envio11, envio12, envio13, envio14, envio15, envio16, envio17, envio18, envio19, envio20, envio21, envio22]


const producto1 = new Producto(1,"Samsung Galaxy A02s",'celular','azul','2020',62999, 2);
const producto2 = new Producto(2, 'Xiaomi Redmi Note 10','celular','plata','2021',54999,5);
const producto3 = new Producto(3,'Samsung Galaxy Awesome A32','celular','white','2021',49999,3);
const producto4 = new Producto(4,'LG K51S','celular','titanio ','2020',26999,1);
const producto5 = new Producto(5,'Moto G30','celular','gris','2021',45999,2);
const producto6 = new Producto(6,'Xiaomi Mi 11','celular','blue','2021',119999,6)
const producto7 = new Producto(7,'Samsung S9 Plus','celular','purple','2017',41999,4);
const producto8 = new Producto(8,'Samsung A51','celular','white','2019',57999,9);
const producto9 = new Producto(9,'Samsung Galaxy A21s','celular','azul','2020',74999,8);
const producto10 = new Producto(10,'Apple iPad','tablet','plata','2020',67499,5);
const producto11 = new Producto(11,'Tablet Lenovo Smart Tab M8','tablet','iron grey','2019',27999,4);
const producto12 = new Producto(12,'Samsung Galaxy Tab A7','tablet','dark gray','2021',34999,1);
const producto13 = new Producto(13,'Tablet Amazon Fire HD','tablet','black','2020',15499,2);
const producto14 = new Producto(14,'Tablet Gadnic','tablet','white','2018',22999,3);
const producto15 = new Producto(15,'Samsung Galaxy Tab A8','tablet','black','2019',31999,12);
const producto16 = new Producto(16,'Samsung Galaxy Watch3','reloj','black','2020',79999,10);
const producto17 = new Producto(17,'Samsung Galaxy Fit2','reloj','black','2020',5999,14);
const producto18 = new Producto(18,'Smartwatch Amazfit Gts 2','reloj','black','2020',12499,16);
const producto19 = new Producto(19,'Xiaomi Mi Watch Lite 1.4','reloj','black','2020',7138,9);
const producto20 = new Producto(20,'Samsung Galaxy Watch4 Classic','reloj','black','2021',56999,13);
const producto21 = new Producto(21,'Samsung Galaxy Watch4','reloj','black','2021',43999,6);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21];

const carrito = []
const totalProductos = []

function confirmarCompra() {
    const respuesta = prompt("Desea comprar nuestros productos?\n1) Si \n2) No");
    if (respuesta == "1") {
      return true;
    } else {
      return false;
    }
}


function mostrarCarritoActual() {
  for (const car of carrito){
    console.log("PRODUCTO"+ "\nNombre: " + car.productos.nombre + "\nTipo: " + car.productos.tipo + "\nColor: " + car.productos.color + "\nLanzamiento: Año "+ car.productos.lanzamiento + "\nPrecio: $" + car.productos.precio + "\nCantidad: " + car.cantidad);
    const total = car.productos.precio * car.cantidad;
    console.log("Precio $" + car.productos.precio + " * Cantidad: " + car.cantidad);
    totalProductos.push(total);
    
  }
  
}

function sumaTotalProductos(){
  const totalPreciosProductos = totalProductos.reduce((acumulador, totalProductos) => acumulador + totalProductos, 0);
  console.log("TOTAL: $" + totalPreciosProductos);
}

function agregarProductoAlCarrito(id) {
    const productoEncontrado = productos.find(producto => producto.id == id);
    if(productoEncontrado == undefined){
      alert("No encontre lo que estas buscando");
    } else {
      const cantidad = prompt("Ingrese la cantidad de productos: " + productoEncontrado.nombre);
      const nuevoPedido = new Pedido(productoEncontrado, cantidad);
      carrito.push(nuevoPedido);
    }
}

function mostrarProductosYSeleccionar() {
    let menuAMostrar = "¿Que producto desea comprar?\n";
    productos.forEach(producto => {
      menuAMostrar += producto.id +") "+ producto.nombre +" - "+ producto.precio+"\n";
    })
    let respuesta = prompt(menuAMostrar);
    return respuesta;
}

function comprarProducto() {
    while (confirmarCompra()) {
      let productoSeleccionado = mostrarProductosYSeleccionar();
      //  Ahora que eligio un producto queremos agregarlo al carrito ✔
      agregarProductoAlCarrito(productoSeleccionado);
      //  Ahora que agrego el carrito quiero ver lo que fue comprando
      mostrarCarritoActual();
      sumaTotalProductos();
    }
}

comprarProducto();
calcular_envio();


function calcular_envio(){
    let mostrarEnvio = "Elija su provincia o zona: \n";
    envios.forEach(envio => {
      mostrarEnvio += envio.e_id +") "+ envio.e_provincia +" - "+ envio.e_precio+"\n";
    });
    let respuesta = prompt(mostrarEnvio);
    const enviarProducto = envios.find(envio => envio.e_id == respuesta);
    console.log("ENVIOS" + "\nProvincia: " + enviarProducto.e_provincia + "\nPrecio: $" + enviarProducto.e_precio + "\nLlega " + enviarProducto.e_tiempo);
}