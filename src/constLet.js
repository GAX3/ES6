//Caracteristica #1 
//Podemos re-declarar variables con var
//Esto puede causar problemas en donde re-declaremos sin darnos cuenta

//Ejemplo
 var color = 'Azul';
 var color = 'Verde'; // al re-declarar toma un nuevo valor 

    let numero = 10;
 // let numero = 20; Erro! no se puede declarar 2 let con el mmismo nombre 

 //Caracteristica #2
 //let y const tienen un scope en el que no podemos acceder a las variables creadas dentro de una funcion
function saludo(){
    var nombre = 'JUAN';
    return 'Hola ' + nombre;
}

console.log(saludo());

//console.log(nombre); //nombre is not defined, no se puede acceder a la variable dentro de la funcion

//Caracteristica #3
//let y const tienenun scope de tipo bloque
var edad = 18;

if(edad >= 18){
    var serAdulto= true;
}

console.log(serAdulto);

//Caracteristica #4
// const se usas cuando queremos que el valor de una variable no cambie
const apellido = "Angel";
// No se puede cambiar el valor de la constante apellido 
// apellido = 'Gonzalez'

//En una const de arreglo podemos agregar mas datos
const colores = ['Rojo', 'Verde'];
colores.push('Azul');

console.log(colores);






