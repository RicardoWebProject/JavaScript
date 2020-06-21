/*
    Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de esta palabra.
*/
let palabra = prompt('Ingresa cualquier palabra:');
let array = Array.from(palabra); //Convierte un string en un array
let longitud = array.length;
let vocales = 0;
let consonantes = 0;

console.log(`Has ingresado la palabra: "${palabra}"`);
console.log(array);

for (const letra of array) {
    switch (letra) {
        case 'a':
        case 'A':
        case 'á':
        case 'Á':
            vocales++;
            break;
        
        case 'e':
        case 'E':
        case 'é':
        case 'É':
            vocales++;
            break;
        
        case 'i':
        case 'I':
        case 'í':
        case 'Í':
            vocales++;
            break;
        
        case 'o':
        case 'O':
        case 'ó':
        case 'Ó':
            vocales++;
            break;
        
        case 'u':
        case 'U':
        case 'ú':
        case 'Ú':
            vocales++;
            break;
        
        default:
            consonantes++;
            break;
    }
}

console.log(`La cantidad de vocales es de ${vocales}.`);
console.log(`La cantidad de consonantes es de ${consonantes}.`);
console.log(`La longitud de la palabra "${palabra}" es de ${longitud} letras.`);