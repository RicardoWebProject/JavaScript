/*
    Escribe un programa que pida un número entero mayor que 1, y que escriba si el número es primo o no.
    En matemáticas, un número primo es aquel que sólo es divisible por dos divisores: él mismo y 1.
*/
let numero = parseInt(prompt('Por favor, ingresa un número mayor que 1:'));
let divisores = 0;

if(numero === 1){
    console.log('El número 1 no es válido.');
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            console.log(`El número ${numero} no es primo.`);
            divisores++;
            break;
        }
    }
}

if (divisores == 0) {
    console.log(`El número ${numero} es primo.`);
}