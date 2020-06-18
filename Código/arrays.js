/*
    Arrays en JS:
    Son estructuras que nos permiten almacenar varios datos y agruparlos.
    Con los arrays, lo que se puede hacer es guardar en la misma variable varios datos.
    Se pueden llenar con cualquier tipo de dato válido en JS y deben ir separados por comas.
    Se pueden mezclar tipos de datos, pero no se recomienda, pues al momento de recorrerlo es habitual encontrar algunos problemas. Pero se puede.
    Se declaran con corchetes, y pueden declararse vacíos o con un contenido ya establecido.
    Pueden añadirse o eliminarse elementos en el momento que queramos. Sin embargo, el Array tiene una longitud definida.
        let número = 5 --> let array = [] ó let array = [x, y, z]
    En el caso de los elementos en un array, cada uno podrá ser identificado por su índice, es decir, por su posición.
    Los índices comienzan desde 0 y aumenta. En total, podría decirse que existen n-1 posiciones, siendo n la cantidad total de valores en el array.
*/

let numeros = [1, 2, 3, 4, 5];
let palabras = ['Hola', 'Estamos en', 'JavaScript.'];

console.log(numeros);
console.log(palabras);

//Si queremos acceder a una posición en específico del array, indicamos la posición deseada dentro de los corchetes:
console.log(numeros[0]);
console.log(palabras[0]);
//En estos casos, lo que imprime es el valor en específico que se encuentra en dicha posición.

console.log(`La palabra "${palabras[0]}", cuenta con ${palabras[0].length} letras.`);