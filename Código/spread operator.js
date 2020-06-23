/* Spread Operator u Operador de Expansión */
/*
    La sintaxis del spread operator son simplemente tres puntos consecutivos:
        ...
    Principalmente, lo que hace es expandir el contenido de un array.
    Este operador nuevo vino con la implementación de ES6.
*/
//Variables y constantes
const numeros = [-12, 2, 3, 23, 42, 2, 3];
let numerosParaSumar = [1, 2, 3]
let nuevosUsuarios = ['marta', 'jaime', 'laura'];
let usuarios = ['javier', 'david', 'rosa', 'juan', 'mercedes'];
let arraycopia = [];
let arrayConcat;
//Fin variables y constantes

console.log(numeros); //Impresión por consola del array
console.log(...numeros); //Impresión de cada valor por separado

/* Sabiendo esto anterior, entonces, ¿En qué casos lo podemos emplear y cómo nos ayuda a trabajar?*/

//Enviar elemento en un array a una función
const sumarNumeros = (a, b, c) => {
    let suma = a+b+c
    return console.log(suma);
}
sumarNumeros(numerosParaSumar); //Si le enviamos el array sin más, obtendríamos un error de valores indefinidos, aunque sean 3 valores. Pues aunque recibe a, no recibe b ni c.
sumarNumeros(...numerosParaSumar); //Descompone/expande el array y envía los 3 elementos contenidos

//Añadir un array a otro array
usuarios.push(...nuevosUsuarios);
console.log(usuarios);

//Copiar arrays
arraycopia = [...numerosParaSumar];
console.log(arraycopia);

//Concatenar arrays
//    -> arrayConcat = numerosParaSumar.concat(arraycopia); //Funciona de la misma manera
arrayConcat = [...numerosParaSumar, ...arraycopia];
console.log(arrayConcat);

//Enviar un número indefinido de argumentos a una función (parámetros REST)
const parametrosRest = (...numeros) => {
    console.log(numeros);
}
parametrosRest(1,2,3,4,5,6,7,8,9,0);

//Con la librería Math
console.log(Math.max(...numeros)); //El número máximo contenido en el array
console.log(Math.min(...numeros)); //El número mínimo contenido en el array

//Eliminar elementos duplicados
console.log([...new Set(numeros)]); //Con ES6 vino el objeto Set. Este no permite números duplicados
//Al incluirlo dentro de corchetes y expandirlo, obtenemos un nuevo array. De lo contrario, se mantiene dentro de un objeto Set.