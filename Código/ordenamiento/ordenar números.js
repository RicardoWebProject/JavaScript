/* 
Ordena 3 números de mayor a menor 
Este tipo de orden se conoce como Permutaciones con 3 elementos.
Las posibilidades en este orden son: 3! = 3*2*1 = 6 (posibles combinaciones)

abc = 123
acb = 132
bac = 213
bca = 231
cab = 312
cba = 321

*/

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduzca el primer número');
let b = prompt('Introduzca el segundo número');
let c = prompt('Introduzca el tercer número');

numbers.textContent = `Los números introducidos son ${a}, ${b}, ${c}.`;

//Ordenamos 3 números de mayor a menor
if (a >= b && a >= c) {
    if (b > c) {
        result.textContent = `El orden de mayor a menor es: ${a}, ${b}, ${c}.`;
    } else {
        result.textContent = `El orden de mayor a menor es: ${a}, ${c}, ${b}.`;
    }
} else if (b >= a && b >= c){
    if (a > c) {
        result.textContent = `El orden de mayor a menor es: ${b}, ${a}, ${c}.`;
    } else {
        result.textContent = `El orden de mayor a menor es: ${b}, ${c}, ${a}.`;
    }
} else if ( c >= a && c >= b){
    if (a > b) {
        result.textContent = `El orden de mayor a menor es: ${c}, ${a}, ${b}.`;
    } else {
        result.textContent = `El orden de mayor a menor es: ${c}, ${b}, ${a}.`;
    }
}