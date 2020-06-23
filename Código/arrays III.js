/* Métodos avanzados en los arrays*/
let palabra = 'Hola';
let palabras = ['HTML', 'CSS', 'JavaScript', 'PHP'];
let letras = ['c', 'd', 'b', 'a'];
let numeros = [1, 8, 100, 300, 3];

//.from(iterable) -> Convierte en array un elemento iterable
console.log(Array.from(palabra));
//console.log(palabra.split(' ')); //Conseguimos el mismo efecto utilizando split y especificando el separador. Si dejamos un espacio como separador, toma palabra por palabra.

//.sort([callback]) -> Ordena los elementos de un array alfabéticamente (por valor unicode / número asignado de las letras). 
//Si pasamos un callback (que es opcional / una función que se ejecuta en otra función), los ordena en función de un algoritmo que proporcionemos.
//Con números no funciona para ordenar de menor a mayor.
console.log(letras.sort());
console.log(numeros.sort((a, b) => a-b)); //Array ordenado de menor a mayor
console.log(numeros.sort((a, b) => b-a)); //Array ordenado de mayor a menor
//Lo que hace sort es recorrer el array. En este último ejemplo, está recorriendo el array a través de pares.
//En este caso, a = 1, b = 8. Los compara y los resta. Si a-b > 0, determina que a es mayor que b.
//Si a-b = 0, entonces a = b. Y si a-b < 0, entonces a es menor que b.
//En función de esto, la función lo que hace es recolocar, para así saber cuál es mayor y cuál es menor.

//.forEach(callback(currentValue, [index])) -> Ejecuta la función indicada una vez por cada elemento del array.
numeros.forEach((numero, index) => console.log(`${numero} se encuentra en la posición ${index}.`)); //Recorre el array y muestra el resultado.
//Este método representa una sintaxis más sencilla para recorrer un array
//El primer parámetro (numero) representaría el elemento del array
//Se puede pasar como segundo parámetro -index-, siendo el índice de cada elemento (la posición). Esto, dependiendo de los casos, puede ser más útil que otras formas de trabajarlo.

//.some(callback) -> Comprueba si al menos un elemento del array cumple una condición. Devuelve True o False
console.log(palabras.some((word) => word.length > 2));

//.every(callback) -> Comprueba si todos los elementos del array cumplen una condición. Devuelve True o False
console.log(palabras.every((word) => word.length > 5));

//.map(callback) -> Transforma todos los elementos del array y devuelve un nuevo array
const numbers = numeros.map((numero) => numero*2);
console.log(numbers);

//.filter(callback) -> Filtra todos los elementos del array que cumplan con una condición y devuelve un nuevo array.
const numbers2 = numeros.filter((numero) => numero > 40);
console.log(numbers2);

//.reduce(callback) -> Reduce todos los elementos del array a un único valor
console.log(numeros.reduce((a,b) => a+b)); //Sumaría todos los elementos del array y devolvería el resultado

/* Ejemplo con un Objeto Usuarios */

const Usuarios = [
    {
        name: 'usuario 1',
        online: true
    },
    {
        name: 'usuario 2',
        online: true
    },
    {
        name: 'usuario 3',
        online: false
    },
    {
        name: 'usuario 4',
        online: true
    },
    {
        name: 'usuario 5',
        online: false
    },
]

//Aplicamos, en este ejemplo, .reduces() para saber cuántos usuarios están en línea.
//user será el elemento que está recorriendo reduce ; cont será el contador que irá sumando el número de usuarios online
const usuariosEnLinea = Usuarios.reduce((cont, user) => {
    if (user.online) {
        cont++
    }
    return cont
}, 0); //Este último cero es para dar el valor inicial a cont

console.log(`Hay ${usuariosEnLinea} usuarios conectados.`);