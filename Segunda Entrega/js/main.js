
busqueda(productos); // BUSCAR PRODUCTOS
mostrarProductos(productos);
const carritoCompra = [];
let nombreUsuario;

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

//Buscador
function busqueda(productos){
    const buscadorInput = document.getElementById('buscadorInput');

    const btnBuscar = document.getElementById('btnBuscar');

    const filtrar = (e)=>{
        e.preventDefault();
        const productoTipo = buscadorInput.value;
        const productoNombre = buscadorInput.value;

        const resultadoBusqueda = productos.filter(producto => producto.tipo === productoTipo || producto.nombre === productoNombre);
        for(producto of productos){

        const id = producto.id;
        document.getElementById(id).style.display = "none";

        }
        for(producto of resultadoBusqueda){

        const id = producto.id;
        document.getElementById(id).style.display = "flex";

        }
    }
    btnBuscar.onclick = filtrar;
}


document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e){
    e.preventDefault();
    nombreUsuario = document.getElementById("user").value;

    let listadoDeCarrito = document.getElementById("listadoCarrito");
    const carrito = JSON.parse(localStorage.getItem(nombreUsuario));

    if (carrito == null) {
        listadoDeCarrito.innerHTML = "<h4>El carrito esta vacio</h4>"
    } 
    else {
      mostrarCarrito(prodCarrito);
    }
}

function mostrarProductos(productos){
    const contenedorTienda = document.getElementById('contenedorTienda');

    for (const producto of productos) {

    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('h3');
    const botonComprar = document.createElement('button');


    divProducto.className = 'card';
    imgProducto.className = 'card-img-top';
    nombreProducto.className = 'nombre-producto';
    precioProducto.className = 'card-precio';
    botonComprar.className = 'btn btn-primary';

    
    divProducto.id = producto.id;
    imgProducto.src = producto.img;
    nombreProducto.append(producto.nombre);
    precioProducto.append(`$${producto.precio}`);
    botonComprar.append('Agregar al Carrito');
    botonComprar.id = `${producto.id}`;

    botonComprar.addEventListener(`click`, () => {
      agregarAlCarrito(botonComprar.id);
    })

    divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);


    contenedorTienda.append(divProducto);

    }
}

function mostrarCarrito(prodCarrito) {
  let listadoCarrito = document.getElementById("listadoCarrito");
  let listadoProductos = document.getElementById("listadoProductos");

  listadoCarrito.innerHTML =
    `<h3>Bienvenido ${nombreUsuario}</h3>
    <div class="container">
       <div class="row align-items-start">
         <div class="col">
           Producto
         </div>
       <div class="col">
           Cantidad
       </div>
       <div class="col">
           Precio
       </div>
    </div>`;
  
  listadoProductos.innerHTML =
  `<div class="container">
     <div class="row align-items-start">
       <div class="col">
         ${prodCarrito.nombre}
       </div>
     <div class="col">
         ${prodCarrito.cantidad}
     </div>
     <div class="col">
        ${prodCarrito.precio}
     </div>
  </div>
  <button id="eliminar">Borrar</button>`;

  let btnEliminar = document.getElementById("eliminar");

  btnEliminar.addEventListener(`click`, () => {
    eliminarProducto(carritoCompras)
    actualizarCarrito()

})
}

function agregarCarrito(id) {
    let prodCarrito = productos.find(item => item.id === id)
    console.log(prodCarrito)
    carritoCompras.push(prodCarrito)
    mostrarCarrito(prodCarrito)
    actualizarCarrito()

    const productosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));

    if (productosEnLocalStorage == null) {
        localStorage.setItem(nombreUsuario, JSON.stringify([carritoCompras]));
        mostrarCarrito([carritoCompras]);
      } 
    else {
        productosEnLocalStorage.push(carritoCompras);
        localStorage.setItem(nombreUsuario, JSON.stringify(productosEnLocalStorage));
        mostrarCarrito(productosEnLocalStorage);
      }
    e.target.reset();
}


function eliminarProducto(carritoCompras) {
    console.log(carritoCompras);
    const productosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArray = productosEnLocalStorage.filter(item => item.id != prodCarrito.id);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarPeliculas(nuevoArray);
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoCompras.length
    precioTotal.innerText = carritoCompras.reduce((acc, el) => acc + el.precio, 0);
}
