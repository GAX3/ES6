const persona = ['Gustavo Angel', 22, 'El Salvador', 'Programador'];

//const nombre= persona[0];
//const edad  = persona[1];

//Destructurar arreglo
const [nombre, edad, pais, profesion= 'N/E', id='N/E' ] = persona;
//const [nombre, , pais, profesion= 'N/E', id='N/E' ] = persona;

console.log(edad);

const mostrarInfo = (nombre, edad)=>  console.log(nombre);

mostrarInfo(nombre, edad)

