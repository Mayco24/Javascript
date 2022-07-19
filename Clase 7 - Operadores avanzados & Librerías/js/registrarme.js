class Registro {
  constructor(nombre, apellido, usuario, password, provincia, localidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.password = password;
    this.provincia = provincia;
    this.localidad = localidad;
  }
}

let registros = JSON.parse(localStorage.getItem("registros")) ?? [];
document.getElementById("formulario-registro").addEventListener("submit", agregarRegistro);

function agregarRegistro(e) {
  e.preventDefault();
  const formulario = new FormData(e.target);
  const nombre = formulario.get("nombre");
  const apellido = formulario.get("apellido");
  const usuario = formulario.get("usuario");
  const password = formulario.get("password");
  const email = formulario.get("email");
  const provincia = formulario.get("provincia");
  const localidad = formulario.get("localidad");
  const crearCuenta = document.getElementById("crearCuenta");

  const registro = new Registro(nombre, apellido, usuario, password, email, provincia, localidad);

  if (camposCorrectos(registro)) {
    registros.push(registro)
    localStorage.setItem("registros", JSON.stringify(registros));
    e.target.reset();
  }
  
  crearCuenta.addEventListener('click', () => {
    Swal.fire({
      title: 'Genial!',
      text: 'Usuario Creado',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  })
}


