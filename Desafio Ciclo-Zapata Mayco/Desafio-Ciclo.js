alert ("Listado de Calificaciones");

cant_alumnos = parseInt(prompt("Ingrese la cantidad de alumnos: "))

let aprobado = 0;
let reprobado = 0;

for (let i = 1; i <= cant_alumnos; i++){
    nombre = prompt("Ingrese Nombre y apellido del Alumno: ");
    nota = parseInt(prompt("Ingrese su nota (1-10): "));
    console.log("Nombre y Apellido: ", nombre);
    console.log("Nota: ", nota);
    if (nota > 0 && nota <= 10){
        if (nota >= 4 && nota <= 10){
            aprobado++;
            if (nota >= 7 && nota <= 10){
                console.log ("Calificacion: Promoción");
            } 
            else{
                console.log ("Calificacion: Regular");
            }
        }
        else{
            reprobado++;
            console.log ("Calificacion: No Regular");
        }
    }
    else{
        console.log("Error... Se pidio ingresar nota 1 a 10... Intentelo de nuevo...");
    }
}

console.log("Cantidad de Alumnos Aprobados: ", aprobado);
console.log("Cantidad de Alumnos Reprobados: ", reprobado);

console.log("----------------------------------------")

alert("Promedio de Notas de Clase")


nombre = prompt("Ingrese Nombre y apellido del Alumno: ");
nota1 = parseFloat(prompt("Ingrese nota del 1er Cuatrimestre (1-10): "));
nota2 = parseFloat(prompt("Ingrese nota del 2er Cuatrimestre (1-10): "));
nota3 = parseFloat(prompt("Ingrese nota del 3er Cuatrimestre (1-10): "));
console.log("Nombre y Apellido: ", nombre);

while ((nota1 && nota2 && nota3) !=0){
    if ((nota1 >= 4) && (nota2 >= 4) && (nota3 >= 4)){
        promedio = (nota1 + nota2 + nota3) / 3;
        console.log ("Calificación final es:", promedio)
        console.log ("Estado: Aprobado");
        console.log ("Condición: Promoción");
        break
    }
    else if (((nota1 < 4) && (nota2 >=4) && (nota3 >= 4)) || ((nota1 >= 4) && (nota2 < 4) && (nota3 >= 4)) || ((nota1 >= 4) && (nota2 >= 4) && (nota3 < 4))){
        recuperatorio = parseInt(prompt("Ingrese nota del recuperatorio (1-10): "));
        if ((recuperatorio >= 4) && (recuperatorio <= 10)){
            promedio = (nota1 + nota2 + nota3 + recuperatorio)  / 4;
            console.log ("Calificación final es:", promedio);
            console.log ("Estado: Aprobado");
            console.log ("Condición: Regular");
            break
        }
        else if (recuperatorio < 4){
            promedio = (nota1 + nota2 + nota3 + recuperatorio)  / 4;
            console.log ("Calificación final es:", promedio);
            console.log ("Estado: No Aprobado");
            console.log ("Condición: No Regular");
            break
        }
        else{
            console.log("Error... Se pidio ingresar nota 1 a 10... Intentelo de nuevo...");
            break
        }
        
    }
    else{
        promedio = (nota1 + nota2 + nota3) / 3;
        console.log ("Calificación final es:", promedio);
        console.log ("Estado: No Aprobado");
        console.log ("Condición: No Regular");
        break
    }
}