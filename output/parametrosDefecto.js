"use strict";

//Parametros por defecto
function registrarUsuario() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No especificado';
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No especificado';
  var correo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'No especificado';
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0000-0000';
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo ").concat(correo, ", Telefono ").concat(telefono);
}

console.log("");
console.log(registrarUsuario('Gustavo', 'El Salvador', 'gus@correo.com', 22302240)); //Al no pasar el telefono como parametro se imprimira 0000-0000

console.log(registrarUsuario('Gustavo', 'El Salvador', 'gus@correo.com')); // Al no ingresar pais

console.log(registrarUsuario('Gustavo', undefined, 'gus@gmail.com'));
console.log(registrarUsuario('Gustavo'));