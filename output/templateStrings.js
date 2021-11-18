"use strict";

var nombre = 'Gustavo Adolfo';
var edad = 22;
var pais = 'El Salvador';
console.log("Forma Anterior");
console.log("Hola me llamo " + nombre + " tengo " + edad + " años, soy de " + pais);
console.log("");
console.log("Forma Actual");
console.log("Hola me llamo ".concat(nombre, " tengo ").concat(edad, " a\xF1os, soy de ").concat(pais));