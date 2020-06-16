/* Strings*/
let cadena = 'Hola Mundo';
let espacios = '   Hola Mundo!';

/* Propiedades */
// length -> Devuelve la longitud de la cadena
console.log(cadena.length);

/* Métodos */
// Todos los métodos devuelven una cadena nueva. La cadena original no será modificada.

//toUpperCase() -> Devuelve la cadena en mayúsculas
console.log(cadena.toUpperCase());

//loLowerCase() -> Devuelve la cadena en minúsculas
console.log(cadena.toLowerCase());

//indexOf(string) -> Devuelve la posición en la que se encuentra el string (la primera coincidencia). Si no lo encuentra, devuelve -1.
console.log(cadena.indexOf('Hola'));

//replace(valor a buscar, valor nuevo) -> Reemplaza el fragmento de la cadena que le digamos y pone el valor nuevo
console.log(cadena.replace('mundo', 'Ricardo'));

//substring(inicio [, fin]) -> Extrae los caracteres desde el inicio hasta el final. Este final no se incluye.
//(Si se encuentra la forma (inicio [, fin]), quiere decir que a partir del segundo parámetro, los parámetros pueden ser opcionales.)
console.log(cadena.substring(0));
console.log(cadena.substring(0, 7));

//slice(iniciio [, fin]) -> Trabaja igual que substring, pero este admite valores negativos. Si anotamos valores negativos, empezará desde el final.
console.log(cadena.slice(-4));

//trim() -> Elimina los espacios al inicio y al final de la cadena.
console.log(espacios + ' (sin trim)');
console.log(espacios.trim() + ' (con trim)');

/* Métodos implementados a partir de ES6 */

//startsWith(valor [, posición]) -> Sirve para saber si la cadena empieza con determinado valor. Si agregamos el parámetro 'posición', decimos desde donde debe empezar a contar. Devuelve true o false.
console.log(cadena.startsWith('H', 0));

//endsWith(valor [, posición]) -> Sirver para saber si la cadena termina con determinado valor. El parámetro 'posición' indica hasta donde termina. Devuelve true o false.
console.log(cadena.endsWith('a', 4));

//includes(valor [, inicio]) -> Similar a indexOf, pero devuelve true o false.
console.log(cadena.includes('Hola'));

//repeat(valor) -> Repite el string en un número de veces que le indiquemos.
console.log(cadena.repeat(2));

let hola = cadena.substring(0, 4);
console.log(hola.repeat(5))

/* Template Strings */
let nombre = 'Ricardo';
let apellido = 'Fuentes';
let edad = 26;
//Si quisiéramos imprimir "Hola, Ricardo Fuentes. Tienes 20 años" de una manera no más tradicional, usamos Template Strings, ya que están creados para estas situaciones.
console.log(`Hola, ${nombre} ${apellido}! Tienes ${edad} años.`);