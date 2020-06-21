/*
    Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de mutiplicar ese número por sus anteriores hasta la unidad.
    Ejm: 5 -> !5 = 5*4*3*2*1 = 120
*/
let numero = parseInt(prompt('Por favor, ingrese un número'));
let factorial = 1; //El inicio del factorial debería ser 1, para poder obtener valores.

if (numero > 0) {
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es ${factorial}.`);
} else if (numero == 0) {
    console.log(`El factorial de ${numero} es 1.`);
}

