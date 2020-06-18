/* Métodos y Propiedades de los Arrays */
let numeros = [1, 2, 3, 4, 5];
/* Propiedades */
//lenght -> Devuelve el número de posiciones que contiene el array.
console.log(numeros.length);

/* Métodos */
//Array.isArray(variable a evaluar) -> Devuelve true si la variable es un array.
console.log(Array.isArray(numeros));

/* Métodos para eliminar elementos */
// shift() -> Elimina el primer elemento del array y devuelve ese elemento.
console.log(numeros);
console.log(numeros.shift());  //Estos valores se pueden guardar en una variable.
console.log(numeros);
// pop() -> Elimina el último elemento del array y devuelve ese elemento.
console.log(numeros);
console.log(numeros.pop());
console.log(numeros);

/* Añadir elementos a un Array */
// push(elemento1, elemento2...) -> Añade uno o más elementos al final de array y devuelve la nueva longitud.
numeros.push(5);
console.log(numeros);
// unshift(elemento1, elemento2...) -> Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
numeros.unshift(1);
console.log(numeros);

/* Búsqueda de elementos en un array */
// indexOf() -> Devuelve el primer índice (posición) del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
console.log(numeros.indexOf(2));
// lastIndexOf() -> Devuelve el último índice (posición) del elemento que coincida con el valor especificado, o -1 si no es encontrado.
console.log(numeros.lastIndexOf(5));
// reverse() -> Invierte el orden de los elementos del array.
console.log(numeros.reverse());
// join('separador') -> Devuelve un string con el separador que le indiquemos, por default son comas.
console.log(numeros.join('.'));
/*
splice(a, b, items) -> Cambia el contenido de un array, eliminando elementos existentes y/o agregando nuevos elementos.
a -> Índice de inicio (desde esta posición indicada, borrará el resto y esperará a posibles nuevos elementos)
b -> Número de elementos (opcional) ; Después del índice de inicio, este argumento le dirá cuántos elementos tomar a partir de ahí, y eliminarlos del array
items -> Elementos a añadir en el caso de que se requiera así. (opcional)
*/
console.log(numeros.splice(1, 2, 1, 2, 3)); //-> En el tercer parámetro (items), se pueden agregar tantos elementos como se desee, y se incluirán en las posiciones de los elementos eliminados anterioremente
//console.log(numeros.splice(1, 0, 1, 2, 3)); -> En el parámetro b, si no queremos que borre algo y solamente añada, simplemente se indica como 0
console.log(numeros);

/*
slice (a, b) -> Extrae elementos de un array, desde la posición a hasta la b.
    Si no se especifica b, o no existe, extrae hasta el final del array. 
    Si no existen ni a, ni b, entonces hace una copia del original.
*/
console.log(numeros.slice(0, 3)); //-> Llega a la posición 3, y no toma el resto ni la posición donde se encuentra.
console.log(numeros);
