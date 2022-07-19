busqueda(productos); 
mostrarProductos(productos);

const listadoCarrito = document.getElementById(`listadoCarrito`);
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const carritoCompra = JSON.parse(localStorage.getItem('carritoCompra')) || [];


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
    botonComprar.nombre = `${producto.nombre}`;

    botonComprar.addEventListener(`click`, () => {
      agregarCarrito(botonComprar.nombre);
    })

    divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
    contenedorTienda.append(divProducto);
    }
}

function mostrarCarrito() {
  let items = document.getElementById("items");
  items.innerHTML = "";
  carritoCompra.forEach(({nombre, cantidad, precio}) => {
    let subtotal = precio * cantidad;
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <th scope="col">#</th>
    <th scope="col">${nombre}</th>
    <th scope="col">${cantidad} </th>
    <th scope="col">${"$" + precio}</th>
    <th scope="col">${"$" + subtotal}</th>
    `;

    const eliminar = document.createElement("button");
    eliminar.innerText = "Borrar";
    eliminar.classList.add("btn", "btn-danger");

    eliminar.addEventListener("click", () => {
      eliminarProducto(nombre);
    })
    tr.appendChild(eliminar);
    
    items.appendChild(tr);
  });
}

function agregarCarrito(nombre) {
    let prodCarrito = productos.find(item => item.nombre == nombre)
    console.log(prodCarrito)
    carritoCompra.push(prodCarrito)
    mostrarCarrito();
    actualizarCarrito()
}


function eliminarProducto(nombre) {
  Swal.fire({
    title: 'Estas seguro que quieres eliminar este producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, seguro',
    cancelButtonText: 'No, no quiero'
  }).then((result) => {
    if (result.isConfirmed) {
      carritoCompra = carritoCompra.filter(item => item.nombre != nombre);
      localStorage.setItem("carritoCompra", JSON.stringify(carritoCompra));
      mostrarCarrito();
      Swal.fire({
        title: 'Borrado!',
        icon: 'success',
        text: "El archivo a sido borrado",
      })
    }
  })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoCompra.length;
    precioTotal.innerText = carritoCompra.reduce((acc, el) => acc + el.precio, 0);
}

//MENU

