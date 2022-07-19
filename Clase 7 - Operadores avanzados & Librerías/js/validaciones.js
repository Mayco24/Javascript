function camposCorrectos({ usuario, password }) {
    if (usuario == "" || usuario.trim() == "") {
      Swal.fire({
        title: "Error!",
        text: "El Usuario no puede estar vacio",
        icon: "Error",
        confirmButtonText: "Vuelve a intentarlo"
      });
      return false;
    }
    else if (password == "" || password.trim() == "") {
      Swal.fire({
        title: "Error!",
        text: "Se debe crear una contraseña",
        text: "El Usuario no puede estar vacio",
        icon: "Error",
        confirmButtonText: "Vuelve a intentarlo"
      });
      return false;
    }
    else if (usuario === password || password === usuario) {
      Swal.fire({
        title: "Error!",
        text: "La contraseña y el usuario no pueden ser la misma",
        icon: "Error",
        confirmButtonText: "Vuelve a intentarlo"
      });
      return false;
    }
    else if (password.length < 7) {
      Swal.fire({
        title: "Error!",
        text: "La contraseña tiene que contener al menos 8 caracteres",
        icon: "Error",
        confirmButtonText: "Vuelve a intentarlo"
      });
      return false;
    }
    return true;
}