"use strict";

var nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
var numero_caracteres = nombres.map(function (nombre) {
  console.log(nombre, nombre.length);
}); //(parametro) =>{
// return //codigo a ejecutar
//}

console.log("");
var caracteres = nombres.map(function (nombre) {
  console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
}); //Imprimiedno  Array

var caracteresNombres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(caracteresNombres); //optimizando Arrow function

var refactorNombres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(refactorNombres);