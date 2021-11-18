"use strict";

var persona = ['Gustavo Angel', 22, 'El Salvador', 'Programador']; //const nombre= persona[0];
//const edad  = persona[1];
//Destructurar arreglo

var nombre = persona[0],
    edad = persona[1],
    pais = persona[2],
    _persona$ = persona[3],
    profesion = _persona$ === void 0 ? 'N/E' : _persona$,
    _persona$2 = persona[4],
    id = _persona$2 === void 0 ? 'N/E' : _persona$2; //const [nombre, , pais, profesion= 'N/E', id='N/E' ] = persona;

console.log(edad);

var mostrarInfo = function mostrarInfo(nombre, edad) {
  return console.log(nombre);
};

mostrarInfo(nombre, edad);