//Parametros por defecto

function registrarUsuario(nombre='No especificado', pais='No especificado', correo='No especificado', telefono='0000-0000'){
    return `Nombre: ${nombre}, Pais: ${pais}, Correo ${correo}, Telefono ${telefono}`;
}

console.log("");

console.log(registrarUsuario('Gustavo','El Salvador','gus@correo.com',22302240));
//Al no pasar el telefono como parametro se imprimira 0000-0000
console.log(registrarUsuario('Gustavo','El Salvador','gus@correo.com'));
// Al no ingresar pais
console.log(registrarUsuario('Gustavo', undefined, 'gus@gmail.com'));


console.log(registrarUsuario('Gustavo'));
