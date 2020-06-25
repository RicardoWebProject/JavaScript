/*
    Atributos y Clases para el DOM: (Atributos y clases de los HTML)

    ATRIBUTOS:
        element.getAttribute('attribute')
        element.setAttribute('attribute', vale)
        -> Se puede acceder a cualquier atributo que tenga una etiqueta html
    
    CLASES:
        element.classList.add('class', 'class'...)
        element.classList.remove('class', 'class'...)
        element.classList.toggle('class' [, force])
        element.classList.contains('class')
        element.classList.replace('oldClass', newClass)
    
    ATRIBUTOS DIRECTOS: 
        id
        value
*/
const titulo = document.getElementById('title');
const nombre = document.getElementById('name');

/* Atributos */
//element.getAttribute('attribute') -> Devuelve el atributo
console.log(nombre.getAttribute('type'));

//element.setAttribute('attribute', 'value') -> Asignarle un valor al atributo / Modificamos el valor
nombre.setAttribute('type', 'text');

/* Clases */
// element.classList.add('class', 'class'...) -> Podemos añadir una o varias clases
titulo.classList.add('main-title');

// element.classList.remove('class', 'class'...) -> Se utiliza para eliminar una o varias clases
titulo.classList.remove('main-title');

// element.classList.toggle('class' [, force]) -> Si tiene una clase, se la quita. Y si no la tiene, se la añade. Se usa mucho más en menús de móvil


// element.classList.contains('class') -> Devuelve True o False en función de si tiene una clase o no.
if (titulo.classList.contains('title')) {
    console.log('Tiene la clase "title".');
} else {
    console.log('No tiene la clase "title".');
}

// element.classList.replace('oldClass', 'newClass') -> Sustituye una clase por otra.
titulo.classList.replace('title', 'main-title');

console.log(titulo);
console.log(nombre);

/*  Atributos Directos: Llamados así (no oficialmente) por ser atributos a los que se pueden acceder 
    de forma directa. Se suelen acceder al id, innerHTML, textContent, value...
*/
console.log(titulo.id); //Obtiene el id del elemento
console.log(titulo.innerHTML); //Recoge las etiquetas
console.log(titulo.textContent); //Recoge el texto que tenga el elemento

console.log(nombre.value);
console.log(nombre.value.length); //Se pudieran aplicar otros atributos 