
busqueda(productos); // BUSCAR PRODUCTOS
mostrarProductos(productos);
let carritoCompra = [];
let nombreUsuario;


const listadoCarrito = document.getElementById(`listadoCarrito`);
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);


function manejadorFormularioUsuario(e){
    e.preventDefault();
    nombreUsuario = document.getElementById("user").value;
    let bienvenidoUsuario = document.getElementById('bienvenido-usuario')
    bienvenidoUsuario.innerHTML = `Bienvenido ${nombreUsuario}`

    let listadoDeCarrito = document.getElementById("listadoCarrito");
    const carrito = JSON.parse(localStorage.getItem(nombreUsuario));

    if (carrito == null) {
        listadoDeCarrito.innerHTML = "<h4>El carrito esta vacio</h4>"
    } 
    else {
      mostrarCarrito(prodCarrito);
    }
}

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
      agregarCarrito(botonComprar.id);
    })

    divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);


    contenedorTienda.append(divProducto);

    }
}

function mostrarCarrito(prodCarrito) {
  let div = document.createElement(`div`);
  div.setAttribute(`class`,`mostrar-carrito`);
  div.innerHTML = `<div>
                        <div class="container">
                          <h4>Carrito de compras</h4>
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                              </tr>
                            </thead>
                            <tbody id="items">
                              <th scope="col">#</th>
                              <th scope="col">${prodCarrito.nombre}</th>
                              <th scope="col">${prodCarrito.cantidad}</th>
                              <th scope="col">${prodCarrito.precio}</th>
                              <th><button id="eliminar${prodCarrito.id}">borrar</button></th>
                            </tbody>
                          </table>
                        </div>
                    </div>`

  listadoCarrito.appendChild(div);

  let btnEliminar = document.getElementById(`eliminar${prodCarrito.id}`);

  btnEliminar.addEventListener(`click`, () => {
    eliminarProducto(carritoCompra)
    actualizarCarrito()
})
}

function agregarCarrito(id) {
    let prodCarrito = productos.find(item => item.id == id)
    console.log(prodCarrito)
    carritoCompra.push(prodCarrito)
    mostrarCarrito(prodCarrito)
    actualizarCarrito()

    const productosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));

    if (productosEnLocalStorage == null) {
        localStorage.setItem(nombreUsuario, JSON.stringify([carritoCompra]));
        mostrarCarrito([carritoCompra]);
      } 
    else {
        productosEnLocalStorage.push(carritoCompra);
        localStorage.setItem(nombreUsuario, JSON.stringify(productosEnLocalStorage));
        mostrarCarrito(productosEnLocalStorage);
      }
    e.target.reset();
}


function eliminarProducto(carritoCompra) {
    console.log(carritoCompra);
    const productosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArray = productosEnLocalStorage.filter(item => item.id != prodCarrito.id);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarPeliculas(nuevoArray);
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoCompra.length
    precioTotal.innerText = carritoCompra.reduce((acc, el) => acc + el.precio, 0);
}
