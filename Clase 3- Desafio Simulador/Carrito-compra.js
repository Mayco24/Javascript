alert("Bienvenido al Desafio Simulador");

let totalcompra = 0;

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
}

//Celulares
const producto1  = new Producto("Samsung A51", 38999);
const producto2  = new Producto("Iphone 13 Pro Max", 319999);
const producto3  = new Producto("Samsung A51", 38999);
//Tablet
const producto4  = new Producto("Apple iPad 10.2", 102499);
const producto5  = new Producto("Lenovo Smart Tab M8", 32999);
const producto6  = new Producto("Samsung Galaxy Tab A7", 30999);
//Relojes
const producto7  = new Producto("Samsung Galaxy Watch4", 40999);
const producto8  = new Producto("Samsung Galaxy Fit2", 8999);
const producto9  = new Producto("Xiaomi Mi Watch Lite 1.4", 16499);


function seguirComprando() {
    const respuesta = prompt("¿Desea seguir comprando?\n1) Si \n2) No");
    if (respuesta == "1") {
        elegirProducto();
    } 
    else {
      alert("Gracias por su Compra")
    }
}

function elegirProducto(){

    let producto = prompt("1- Celular \n2- Tablet \n3- Reloj \n0- Salir: ");
    while (producto !="0"){
        if (producto == 1){
            let prod = parseInt(prompt("1- Samsung A51 \n2- Iphone 13 Pro Max \n3- Samsung S21 FE 5G "));
            switch(prod){
                case 1:
                    alert("Has comprado " + producto1.nombre + " por " + producto1.precio);
                    totalcompra = totalcompra + producto1.precio;
                    break;
                case 2:
                    alert("Has comprado " + producto2.nombre + " por " + producto2.precio);
                    totalcompra = totalcompra + producto2.precio;
                    break;
                case 3:
                    alert("Has comprado " + producto3.nombre + " por " + producto3.precio);
                    totalcompra = totalcompra + producto3.precio;
                    break;
                default:
                    alert("No has seleccionado ningun producto");
                    break;
            }
            break
        }
        else if (producto == 2){
            let prod = parseInt(prompt("1- Apple iPad 10.2 \n2- Lenovo Smart Tab M8 \n3- Samsung Galaxy Tab A7 "));
            switch(prod){
                case 1:
                    alert("Has comprado " + producto4.nombre + " por " + producto4.precio);
                    totalcompra = totalcompra + producto4.precio;
                    break;
                case 2:
                    alert("Has comprado " + producto5.nombre + " por " + producto5.precio);
                    totalcompra = totalcompra + producto5.precio;
                    break;
                case 3:
                    alert("Has comprado " + producto6.nombre + " por " + producto6.precio);
                    totalcompra = totalcompra + producto6.precio;
                    break;
                default:
                    alert("No has seleccionado ningun producto");
                    break;
            }
            break
        }
        else if (producto == 3){
            let prod = parseInt(prompt("1- Samsung Galaxy Watch4 \n2- Samsung Galaxy Fit2 \n3- Xiaomi Mi Watch Lite 1.4 "));
            switch(prod){
                case 1:
                    alert("Has comprado " + producto7.nombre + " por " + producto7.precio);
                    totalcompra = totalcompra + producto7.precio;
                    break;
                case 2:
                    alert("Has comprado " + producto8.nombre + " por " + producto8.precio);
                    totalcompra = totalcompra + producto8.precio;
                    break;
                case 3:
                    alert("Has comprado " + producto9.nombre + " por " + producto9.precio);
                    totalcompra = totalcompra + producto9.precio;
                    break;
                default:
                    alert("No has seleccionado ningun producto");
                    break;
            }
            break
        }
        else{
            alert("Error... Vuelve a intentarlo...");
        }
    }
    seguirComprando();
    alert("El total de su compra final es: "+ totalcompra);
}

elegirProducto();



  
