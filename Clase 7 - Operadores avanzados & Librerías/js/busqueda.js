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
