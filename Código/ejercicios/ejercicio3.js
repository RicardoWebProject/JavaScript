/*
    Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje: "es par" o "es impar."
    Si el número fuese 5, el resultado sería:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/
let numero = parseInt(prompt('Por favor, ingresa un número mayor que 0:'));

for (let i = numero; i > 0; i--) {
    (i % 2 == 0) ?
        console.log(`El número ${i} es par`)
        :
        console.log(`El número ${i} es impar`);
}