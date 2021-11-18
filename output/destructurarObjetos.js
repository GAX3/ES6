"use strict";

var usuario = {
  nombre: 'Gustavo Angel',
  correo: 'correro@gmail.com',
  edad: 22,
  pais: 'El Salvador',
  profesion: 'Desarrollador Web'
};
var nombre = usuario.nombre,
    correo = usuario.correo,
    _usuario$id = usuario.id,
    id = _usuario$id === void 0 ? "No especificao" : _usuario$id;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'Estudiante' : _ref$profesion;
  return console.log("Hola ".concat(nombre, " de profesion: ").concat(profesion));
};

mostrarInfo(usuario);
console.log(id);
console.log(nombre);
console.log(usuario);
console.log(usuario.correo);