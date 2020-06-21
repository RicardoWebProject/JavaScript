/*
    Dado un array que contiene:
        ["azul", "amarillo", "rojo", "verde", "rosa"]
    Determinar si un color introducido por el usuario se encuentra dentor del array o no.
*/
const colores = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];
let color = prompt('Por favor, ingrese un color:').toLowerCase();
let busqueda = colores.includes(color);;

console.log(`ARRAY ORIGINAL: ${colores}`);

if (busqueda) {
    console.log(`El color ${color} se encuentra dentro del array original.`);
} else {
    console.log(`El color ${color} no se encuentra dentro del array original.`);
}