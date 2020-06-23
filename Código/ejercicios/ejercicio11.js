/*
    - Crear una clase Libro.
        - La clase libro tendrá: Título, autor, anio y género.
        - Un método que devuelva toda la información del libro.
        - Un método que devuelva el autor del libro.
        - Un método que devuelva el género del libro.
    - Pide 3 libros y guárdalos en un array.
    - Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
    - Validar que los campos no se introduzcan vacíos.
    - Validar que el año sea un número y que tenga 4 dígitos.
    - Validar que el género sea: aventuras, terror o fantasía.
    - Crea una función que muestre todos los libros.
    - Crea una función que muestre los autores ordenados alfabéticamente.
    - Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando el método
        que devuelve la información.
*/
let libros = [];
//let inLibro;

class Libro {
    constructor(titulo, autor, anio, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
    }

    infoLibro () {
        let info = console.log(`Título del libro: ${this.titulo} \n Autor: ${this.autor} \n Año de publicación: ${this.anio} \n Género: ${this.genero}`);
        return info
    }

    leerAutor () {
        return this.autor;
    }

    obtenerGenero () {
        return this.genero;
    }
}

while (libros.length < 3) {
    let titulo = prompt('Introduce el título del libro:');
    let autor = prompt('Introduce el autor del libro:');
    let anio = prompt('Introduce el año del libro: ');
    let genero = prompt('Introduce el género del libro (aventura, terror o fantasía):').toLowerCase();

    if (titulo != '' && autor != '' && !isNaN(anio) && anio.length == 4 && (genero == 'aventura' || 'terror' || 'fantasía' || 'fantasia')) {
        libros.push(new Libro(titulo, autor, anio, genero)); //Guarda directamente un nuevo objeto en el array
    }
}

const mostrarLibros = () => {
    console.log(libros);
}

const mostrarAutores = () => {
    let autores = [];
    for (const libro of libros) {
        autores.push(libro.leerAutor());
    }
    console.log(autores.sort()); //Para ordenar alfabéticamente, método sort()
}

const mostrarGeneros = () => {
    let pedirGeneros = prompt('Introduce un género de libro para buscar:');

    for (const libro of libros) {
        let genero = libro.obtenerGenero();

        if (pedirGeneros == genero) {
            console.log(libro.infoLibro());
        }
    }
}

mostrarLibros();
mostrarAutores();
mostrarGeneros();

// for (let i = 0;  i < 3; i++) {
//     inLibro = prompt('Introduce el nombre de un libro:');
//     if (inLibro != '') {
//         libros.push(inLibro);
//     } else {
//         alert('Debe introducir un nombre de algún libro.');
//          i--;
//     }
// }
// console.log(libros);