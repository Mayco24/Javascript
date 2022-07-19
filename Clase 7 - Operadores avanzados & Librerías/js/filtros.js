function ordenar(productos){
    let filtroProductos = productos;
    let valorDeFiltro=$("#filtroDeTipo").val()

    if(valorDeFiltro==0){
        mostrarProductos(productos);
    }
    else if(valorDeFiltro==1){
        filtroProductos = filtroProductos.filter(producto=>producto.tipo==="celular");
        mostrarProductos(filtroProductos);
    }
    else if(valorDeFiltro==2){
        filtroProductos = filtroProductos.filter(producto=>producto.tipo==="tablet");
        mostrarProductos(filtroProductos);
    }
    else if(valorDeFiltro==3){
        filtroProductos = filtroProductos.filter(producto=>producto.tipo==="reloj");
        mostrarProductos(filtroProductos);
    }
}

botonDeCambios = document.getElementById("aplicarCambios");
botonDeCambios.addEventListener("click",(e)=>{
    e.preventDefault();
    ordenar(productos);
})
