const usuario =
{
    nombre: 'Gustavo Angel',
    correo: 'correro@gmail.com',
    edad: 22,
    pais: 'El Salvador',
    profesion: 'Desarrollador Web' 
}

const {nombre, correo, id="No especificao"} = usuario;

const mostrarInfo = ( {nombre, profesion='Estudiante'} ) => console.log(`Hola ${nombre} de profesion: ${profesion}`);
mostrarInfo(usuario);

console.log(id);
console.log(nombre);
console.log(usuario);
console.log(usuario.correo);



