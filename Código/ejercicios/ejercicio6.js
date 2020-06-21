/*
    Escriba un programa que permita introducir una serie de números indeterminada de números
    mientras su suma no supere al total de 50. Cuando eso ocurra, se debe mostrar el total
    acumulado y el contador de cuántos números se han introducido.
*/
let numero; 
let suma = 0;
let contador = 0;

while (suma <= 50) {
    numero = parseInt(prompt('Por favor, introduzca un número:'), 10);
    suma +=  numero;
    contador++;
}
console.log('Ha superado una suma total de 50.');
console.log(`El total de los números acumulados es ${suma}.`);
console.log(`Ha introducido un total de ${contador} números.`);