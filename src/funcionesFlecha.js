const nombres = ['Carlos','Alejandro', 'Manuel', 'Cesar'];

const numero_caracteres = nombres.map(function(nombre){
    console.log(nombre, nombre.length);
});

//(parametro) =>{
// return //codigo a ejecutar
//}
console.log("");

const caracteres = nombres.map((nombre) =>{
    console.log(`${nombre} tiene ${nombre.length} letras`);
});

//Imprimiedno  Array
const caracteresNombres = nombres.map((nombre) =>{
    return (`${nombre} tiene ${nombre.length} letras`);
});

console.log(caracteresNombres);

//optimizando Arrow function
const refactorNombres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`);

console.log(refactorNombres);
